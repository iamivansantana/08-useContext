import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const data ={
    nombre:'santana',
    edad: 30
}

const BotonCambiarData = () => {

    const {setData} = useContext(DataContext);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={()=>setData(data)}
            >
                Cambiar Data
            </button>  
        </>
    )
}

export default BotonCambiarData
