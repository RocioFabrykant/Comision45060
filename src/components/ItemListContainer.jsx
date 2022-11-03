import React from 'react'
import { useState,useEffect } from 'react';
import { getProducts } from '../mock/products';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
  const [items,setItems] = useState([]);
  const {categoryName} = useParams();
  useEffect(() => {
    
    getProducts(categoryName)
    .then((res) => {
      setItems(res)
    })
    .catch((error) => {
      console.log(error);
    })
  },[categoryName]);
  return (
    
    <main className='contenedor'>
        <div className='contenedorProductos'>
          <ItemList items = {items}/>
        </div>
    </main>
    
  )
}

export default ItemListContainer