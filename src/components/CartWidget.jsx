import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const {totalUnidades} = useContext(CartContext);
  return (
    <div className="material-symbols-outlined">
    shopping_cart
    <span className="fontcartwidget">{totalUnidades() !== 0 && totalUnidades()}</span>
    </div>
    
   
  )
}

export default CartWidget