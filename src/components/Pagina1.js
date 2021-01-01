import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Pagina1 = () => {

    const {data} = useContext(DataContext)

    return (
        <>
          <h2>Pagina 1</h2>  
          <hr />
          <pre>
              {JSON.stringify(data,null,2)}
          </pre>
        </>
    )
}

export default Pagina1
