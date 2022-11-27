import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Form from './components/Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';



function App() {
  
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
        <Route path="/detail/:idProd" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Form/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
