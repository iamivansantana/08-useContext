import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';

const Pagina2 = () => {
  const {data} = useContext(DataContext);
    return (
        <>
          <h2>Pagina 2</h2>
          <hr />  
          <pre>
            {JSON.stringify(data)}
          </pre>
        </>
    )
}

export default Pagina2
