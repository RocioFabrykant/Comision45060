import React from 'react'
import CartWidget from './CartWidget';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='menu'>
        
        <ul>
            <li><Link to="/"><img src={logo} alt="" /><p style={{fontStyle:'oblique'}}>KANT</p></Link></li>
            <li className='linkMenu'><Link to="/category/remeras">Remeras</Link></li>
            
            <li className='linkMenu'><Link to="/category/tops">Tops</Link></li>
            
            <li className='linkMenu'><Link to="/category/vestidosyenteros">Vestidos</Link></li>
            
            <li className='linkMenu'><Link to="/cart"><CartWidget/></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar