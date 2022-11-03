import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount'

const ItemList = ({items}) => {
  //const onAdd = (argumento) => {
    //console.log("la cantidad agregada es :", argumento);
 // }
  return ( 
    items.map((producto)=>{
        return (
        <div key={producto.id}>
            <Item producto = {producto}/>
        </div>
        )
    })
    
  )
}

export default ItemList