import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import {Link} from 'react-router-dom';

const Cart = () => {
  const {cart,deleteOne,deleteAll,precioTotal} = useContext(CartContext);
  if(cart.length === 0) return( <h1>El carrito está vacío <Link to="/">Ir al HOME</Link></h1>);
  return(
    <div className='checkout'>
      {cart.map((prod) => (
        <div>
          <img src={prod.img} alt={prod.title} width="80px" />
          <div>
            <h3>{prod.title}</h3>
            <h3>Cantidad {prod.cantidad}</h3>
            <button onClick={()=> deleteOne(prod.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <h2>Total:${precioTotal()}</h2>
      <button onClick={deleteAll}>Vaciar carrito</button>
      <br /><br /><Link to="/checkout">Checkout</Link>
    </div>
  )
      
  };

export default Cart