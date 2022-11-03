import React from 'react'
import ItemCount from '../components/ItemCount';

const ItemDetail = ({item}) => {
  const onAdd = (cantidad) => console.log("la cantidad es:",cantidad);
  return (
    <div className='ItemDetalle'>
      <img className='imagenDetalle' src={item.img} alt={item.title} />
      <article>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h3>${item.price}.-</h3><br />
        <ItemCount stock={item.stock} onAdd={onAdd}/>
      </article>
    </div>
  )
}

export default ItemDetail