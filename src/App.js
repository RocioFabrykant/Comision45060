import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer saludo='Bienvenidos al sitio'/>}/>
        <Route path="/category/:categoryName" element={<ItemListContainer saludo='Bienvenidos al sitio'/>}/>
        <Route path="/detail/:idProd" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
