import React,{ createContext, useState } from "react";

export const DataContext = createContext();

const dataFixed = {
    nombre:'Ivan',
    edad: 26
  }


const DataProvider = ({children}) => {

    const [data, setData] = useState(dataFixed);

    return (
        <DataContext.Provider
            value={{
                data,setData
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
