import './styles/app.css';
import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import Table from "./Table";
import Panel from "./Panel";
import { parseDataJSON, deepSort } from "./utils";

function App() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setStateData] = useState(null);
  const [dataOpenedMap, setOpenedMap] = useState(new Map())
  const [filterActive, setFilterActive] = useState(false)
  const [sortFieldName, setSortFieldName] = useState('id')
  const [sortDescending, setSortDescending] = useState(false)

  const loadData = async () => {
      setLoading(true)
      const responseData = await fetch("./default.json")
          .then(res => res.json())
          .catch(err => setHasError(err))

      setStateData( hasError ? [] : parseDataJSON(responseData, setOpenedMap));
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
                 sortDescending={sortDescending} setSortDescending={setSortDescending}
          />
          <Table data={ deepSort(data, sortFieldName, sortDescending) }
                 openedMap={dataOpenedMap}
                 setOpenedMap={setOpenedMap}
                 filterActive={filterActive}/>
          </>
  );
}

export default App;
