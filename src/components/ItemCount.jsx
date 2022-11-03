import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock,onAdd}) => {
const [cantidad,setCantidad] = useState(0);
const sumar = () => {
    if(cantidad < stock){
        setCantidad(cantidad + 1);
    }
}
const restar = () => {
    if(cantidad > 0){
        setCantidad(cantidad - 1);
    }
}
  return (
    <>
    <button onClick={sumar} disabled = {cantidad === stock}>+</button>
    <span>{cantidad}</span>
    <button onClick={restar} disabled = {cantidad === 0}>-</button><br /><br />
    <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount