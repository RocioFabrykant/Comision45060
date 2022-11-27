import { collection, serverTimestamp,addDoc } from 'firebase/firestore';
import {db} from '../services/firebaseConfig';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';

const Form = () => {
  const [name,setName] = useState('');
  const [apellido,setApellido] = useState('');
  const [email,setEmail] = useState('');
  const [email2,setEmail2] = useState('');
  const [cel,setCel] = useState('');
  const [orderId,setOrderId] = useState('');
  const {cart,precioTotal,deleteAll} = useContext(CartContext);
  const totalCarrito = precioTotal();
  const enviarDatos = (e) =>{
    e.preventDefault();
    console.log(e.target.elements.nombre.value);
    const objOrden = {
      comprador:{
        nombre:name,
        apellido:apellido,
        email:email,
        cel:cel
      },
      items:cart,
      total:totalCarrito,
      date:serverTimestamp(),
    };
    const orderCollection = collection(db,'orders');
    addDoc(orderCollection,objOrden)
    .then((res)=>{
      setOrderId(res.id);
      deleteAll();
      
    })
    .catch((error)=>{
      console.log(error);
    })

};
  const handleName = (e)=> setName(e.target.value);
  const handleLastName = (e)=> setApellido(e.target.value);
  const handleEmail = (e)=> setEmail(e.target.value);
  const handleEmail2 = (e)=> setEmail2(e.target.value);
  const handleCel = (e) => setCel(e.target.value);
  

  if(orderId){
    return(
      <h1>Gracias por tu compra, el nro de seguimiento es: {orderId}</h1>
    );
  }
  
  return (
    <div>
      <form action="" onSubmit={enviarDatos}>
        <input type="text" name="nombre" onChange={handleName} placeholder='nombre' value={name} /><br />
        <input type="text" name="apellido" onChange={handleLastName} placeholder='apellido' value={apellido} /><br />
        <input type="text" name="email" onChange={handleEmail} placeholder='nombre@email.com' value={email} /><br />
        <input type="text" name="confirma" onChange={handleEmail2} placeholder='confirmar el correo'value={email2} /><br />
        <input type="text" name="cel" onChange={handleCel} placeholder='celular' value={cel}/><br />
        <button disabled={name===""||apellido===""||cel===""||email !== email2}>Enviar</button>
      </form>
    </div>
  )
}

export default Form