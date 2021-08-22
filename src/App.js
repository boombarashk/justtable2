import './styles/app.css';
import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import Table from "./Table";

function App() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setStateData] = useState(null);

  const loadData = async () => {
      setLoading(true)
      const responseData = await fetch("./default.json")
          .then(res => res.json())
          .catch(err => setHasError(err))

      setStateData( hasError ? [] : parseDataJSON(responseData) )
      setLoading(false)
  }

  useEffect(() => {
      if (data === null ) loadData();
      return () => {};
  })

  return (<>
          <Loader visible={ loading }/>
          <h1>Data Table</h1>
          <Table data={data}/>
          </>
  );
}

function parseDataJSON(data) {
    return data
}

export default App;
