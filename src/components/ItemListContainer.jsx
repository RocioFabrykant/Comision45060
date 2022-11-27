import React from 'react'
import { useState,useEffect } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {getDocs, query,where } from 'firebase/firestore';
import {collectionProd} from '../services/firebaseConfig';
import ClipLoader from "react-spinners/ClipLoader";
const ItemListContainer = () => {
  const [items,setItems] = useState([]);
  const {categoryName} = useParams();
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const ref = categoryName?query(collectionProd, where('category','==',categoryName)):collectionProd;
    getDocs(ref)
    .then((res) => {

      const products = res.docs.map((prod) =>{
        return{
          id:prod.id,
          ...prod.data()

        };
      });
      setItems(products)
    })
    
    .catch((error) => {
      console.log(error);
    })
    .finally(()=>{
      setLoading(false);
    })
    return()=> setLoading(true);

  },[categoryName]);
  if(loading){
    return (
      <div>
        <ClipLoader/>
        
      </div>
    );
  }
  return (
    
    <main className='contenedor'>
        <div className='contenedorProductos'>
          <ItemList items = {items}/>
        </div>
    </main>
    
  )
}

export default ItemListContainer