import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    const addtoCart = (item,cantidad) => {
        if(isinCart(item.id)){
        sumarCantidad(item,cantidad);
        }else{
            setCart([...cart,{...item,cantidad}]);
        }
        
    };

    const isinCart = (id) =>{
        return cart.some((prod)=> prod.id === id);
    };

    const sumarCantidad = (itemPorAgregar,cantidad) =>{
        const cartActualizado = cart.map((prodDelCarrito) => {
            if(prodDelCarrito.id === itemPorAgregar.id){
                const productoActualizado = {
                    ...prodDelCarrito,cantidad:cantidad,
                };
                return productoActualizado
            }else{
                return prodDelCarrito
            }
        });
        setCart(cartActualizado);
    };

    const deleteAll = () =>{
        setCart([]);
    };

    const deleteOne = (id) =>{
        const productosFiltrados = cart.filter((prod)=>prod.id !== id);
        setCart(productosFiltrados);
    }
 
    const totalUnidades = () =>{
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod)=>{
            count+=prod.cantidad;
        })
        return count
    }

    const cantidadDeProducto = (id) =>{
        const product = cart.find((prod)=> prod.id === id);
        return product?.cantidad
    }

    const precioTotal = () =>{
        let preciotot = 0;
        const copia = [...cart];
        copia.forEach((prod)=>{
            preciotot+=prod.cantidad*prod.price;
        })
        return preciotot

    }
    return (
        <CartContext.Provider value={{cart,addtoCart,deleteAll,deleteOne,cantidadDeProducto,totalUnidades,precioTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider