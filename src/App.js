import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo='Bienvenidos al sitio'/>

    </>
  );
}

export default App;
