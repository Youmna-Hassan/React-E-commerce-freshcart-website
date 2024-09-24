import axios from "axios";
import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export let CartContext=createContext();
let userToken= localStorage.getItem('userToken')
let headers={
    token:userToken
}
//addtocart
function addToCart(id){

return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
{
    productId:id
},
{
 headers:headers
}).then((response)=>response)
.catch((err)=>err)
}

//getcart
function getLoggedUserCart(){

    return axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
   
   {
       headers:headers
   }).then((response)=>response)
   .catch((err)=>err)
  
}

//removeitem

function removeCartItem(id){
return axios.delete(
    `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
    headers:headers
    }).then((response)=>response)
    .catch((err)=>err)

}

//updatecount
function updateCartCount(id,count){

    return axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`
        ,{
            count:count
        }
        ,{
            headers:headers
        }
    )
}

//clearcart

function clearCart(){

    return axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`
        ,{
            headers:headers
        }
    )
}
// online payment
function onlinePayment(cartId,url,values){

    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
    {shippingAddress:values},
    {headers:headers})
    .then((response)=>response)
    .catch((err)=>err)

}





export default function CartContextProvider(props){
    
    const [cartId,setCartId]=useState();
    async function getCardId(){

        let{data}=await getLoggedUserCart();
        setCartId(data.data._id)
    }
    
    useEffect(()=>{

        getCardId();
        
        })
        

return<CartContext.Provider value={{addToCart,getLoggedUserCart,removeCartItem,updateCartCount,clearCart,onlinePayment,cartId}}>

    {props.children}
</CartContext.Provider>


}