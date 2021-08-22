import './styles/app.css';
import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import Table from "./Table";
import Panel from "./Panel";

function App() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setStateData] = useState(null);
  const [dataParentMap, setParentMap] = useState(new Map())
  const [filterActive, setFilterActive] = useState(false)

  const loadData = async () => {
      setLoading(true)
      const responseData = await fetch("./default.json")
          .then(res => res.json())
          .catch(err => setHasError(err))

      setStateData( hasError ? [] : parseDataJSON(responseData, setParentMap));
      setLoading(false)
  }

  useEffect(() => {
      if (data === null ) loadData();
      return () => {};
  })

  return (<>
          <Loader visible={ loading }/>
          <h1>Data Table</h1>
          <Panel filterActive={filterActive} setFilterActive={setFilterActive}/>
          <Table data={data}
                 parentMap={dataParentMap}
                 setParentMap={setParentMap}
                 filterActive={filterActive} />
          </>
  );
}

function parseDataJSON(data, setParentMap) {
    if (typeof data === 'undefined' || data.length === 0) {
        return []
    }
    const parentMap = new Map()
    const reformattedData = [];
    data.forEach(item => {
      const funcTransform = (item) => {
          return {
              balanceNum: +item.balance.replace(/[\$\,]/g,''),
              ...item
          }
      }

      if (item.parentId !== 0) {
          const children = parentMap.has(item.parentId)
            ? parentMap.get(item.parentId).children
            : [];

          children.push(funcTransform(item))
          parentMap.set(item.parentId, {childrenVisible: true, children})
      } else {
          reformattedData.push(funcTransform(item))
      }

    });
    setParentMap(parentMap);
    return reformattedData
    //return sortByField(reformattedData, 'name')
}

function sortByField(arr, fieldName) {
    return arr.sort((a,b) => (a[fieldName] > b[fieldName]) ? 1 : ((b[fieldName] > a[fieldName]) ? -1 : 0))
}

export default App;
