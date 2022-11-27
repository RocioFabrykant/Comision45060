import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {

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