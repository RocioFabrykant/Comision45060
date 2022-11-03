import React from 'react'
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className='ItemProducto'>
        <img className='imagenItem' src={producto.img} alt={producto.title} />
        <article>
            <h2>{producto.title}</h2>
            <h3>${producto.price}</h3>
        </article>
        <Link to={`/detail/${producto.id}`}>Ver detalle</Link>
    </div>

  )
}

export default Item