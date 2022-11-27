import React from 'react'
import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import {getDoc,doc} from 'firebase/firestore';
import {collectionProd} from '../services/firebaseConfig'
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const { idProd } = useParams()
    const [loading,setLoading] = useState(true)
    useEffect(() =>{
      const ref = doc(collectionProd,idProd);
      getDoc(ref)
      .then((res)=>{
        setItem({
          id:res.id,
          ...res.data(),
        });
      })
      .catch((error)=>{
        console.log(error);
      })
      .finally(() =>{
        setLoading(false);
      });

    },[idProd])
    if(loading){
      return (
        <div>
          <ClipLoader/>
        </div>
      );
    }
    return (
    <div>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer