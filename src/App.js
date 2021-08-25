import './styles/app.css';
import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import Table from "./Table";
import Panel from "./Panel";
import { getParentNode, deepSort } from "./utils";

function App() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setStateData] = useState(null);
  const [dataParentMap, setParentMap] = useState(new Map()) //fixme openedMap
  const [filterActive, setFilterActive] = useState(false)
  const [sortFieldName, setSortFieldName] = useState('balance')

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
          <Panel filterActive={filterActive} setFilterActive={setFilterActive}
                 sortFieldName={sortFieldName} setSortFieldName={setSortFieldName}
          />
          <Table data={ deepSort(data, sortFieldName) }
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
    /**
     * parentMap в зависимости от вложенности хранит 0.[индекс в массиве 1го уровня] либо id родителя
     **/
    const parentMap = new Map()
    const reformattedData = [];
    let counter = 0;

    data.forEach(item => {
      const funcTransform = (item) => {
          return {
              children: [],
              opened: false,
              balanceNum: +item.balance.replace(/[\$\,]/g,''),
              ...item
          }
      }

      if (item.parentId === 0) {
          reformattedData.push(funcTransform(item));
          parentMap.set(item.id, +`0.${counter}`);
          counter++
      } else {
          parentMap.set(item.id, item.parentId)

          const node = getParentNode({dataArray: reformattedData, parentMap, parentId: item.parentId})
          if (node) {
              // NB no save item.parent = node <-- sort broke
              node.children.push(funcTransform(item));
          }
      }
    });
    //setParentMap(parentMap); fixme openedMap
    return reformattedData
}

export default App;
