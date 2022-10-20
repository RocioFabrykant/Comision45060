import React from 'react'
import CartWidget from './CartWidget'
import logo from '../img/logo.png'

const Navbar = () => {
  return (
    <nav className='menu'>
        
        <ul>
            <li><img src={logo} alt="" /><p style={{fontStyle:'oblique'}}>KANT</p></li>
            <li className='linkMenu'><a href=''>Shop</a></li>
            
            <li className='linkMenu'><a href=''>Historia</a></li>
            
            <li className='linkMenu'><a href=''>Contacto</a></li>
            
            <li className='linkMenu'><a href=''><CartWidget/></a></li>
        </ul>
    </nav>
  )
}

export default Navbar