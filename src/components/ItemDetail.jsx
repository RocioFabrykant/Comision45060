import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {
  const [show,setShow] = useState(true);
  const {addtoCart,cantidadDeProducto} = useContext(CartContext);
  const onAdd = (cantidad) => {
    setShow(false);
    addtoCart(item,cantidad);
  };
  const cantidad = cantidadDeProducto(item.id);
  return (
    <div className='ItemDetalle'>
      <img className='imagenDetalle' src={item.img} alt={item.title} />
      <article>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>${item.price}.-</h3><br />
        {show?(<ItemCount stock={item.stock} onAdd={onAdd} initial={cantidad}/>)
        :(<Link to="/cart">Ir al carrito</Link>)}
        
      </article>
    </div>
  )
}

export default ItemDetail