import { useState } from "react"
import { Button } from '@mui/material';

const ItemCount = ({cantidad, setCantidad, setShowButton}) => {

    const addProduct = () => {
        setCantidad(cantidad + 1)
    }

    return(
        <>
        <label>Selecciona cantidad</label>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px 0'}}>
            <button >-</button>
            <p>{cantidad}</p>
            <button onClick={addProduct}>+</button>
        </div>
        <Button variant='outlined' onClick={() => setShowButton(true)}>Agregar producto</Button>
        </>
    )
}

export default ItemCount