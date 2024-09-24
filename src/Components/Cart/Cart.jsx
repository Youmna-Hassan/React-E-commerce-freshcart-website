import React from "react"
import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { useState } from "react";
import { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";





export default function Cart(){
 const[cartDetails,setCartDetails]=useState(null);

let {getLoggedUserCart,removeCartItem,updateCartCount,clearCart}=useContext(CartContext);

async function getCart(){
    let {data} =await getLoggedUserCart();
  setCartDetails(data);
  console.log(data);
}

useEffect(()=>{

getCart();},[]
)

async function removeProduct(id){
 let {data} =await removeCartItem(id);
 setCartDetails(data);

}

async function updateCount(id,count){
let{data} =await updateCartCount(id,count);
setCartDetails(data);
}

async function clearAllCart(){
     await clearCart();
    setCartDetails(null);
  
}


    return<>
   {cartDetails?
   <div className="bg-light w-75 py-3 my-2 mx-auto ">
       <h3 >Shopping Cart</h3>
       <h6 > <span className="text-main">Cart Items Type: </span>{cartDetails.numOfCartItems}</h6>
       <h4 className="h6 fw-b">
           <span className="text-main">Total Cart Price :</span> {cartDetails.data.totalCartPrice} EGP
       </h4>
       {cartDetails.data.products.map((x)=>
       <div className="row">
           <div className="col-md-1">
<img className="w-100" alt="product" src={x.product.imageCover}/>
           </div>
           <div className="col-md-11">
               <div className="d-flex justify-content-between align-items-center">

                  <div>
<h3>{x.product.title.split('').slice(0,11).join('')}</h3>
<h6><span className="text-main"> Price : </span>{x.price} EGP</h6>
                  </div>

<div>
    <button onClick={()=>updateCount(x.product.id,x.count+1)} className="btn border-main "> + </button>
<span> {x.count} </span>
    <button onClick={()=>updateCount(x.product.id,x.count-1)} className="btn border-main"> - </button>
</div>

               </div>

               <button onClick={()=>removeProduct(x.product.id)} className="btn"> <i className="red-color danger fas fa-trash"> </i> Remove </button>
           </div>
       </div>)}
       <div className="d-flex justify-content-between ">
       <Link to ={'/address'} className="text-decoration-none btn btn-outline-info fw-bold w-50 mx-3 "> Online Payment </Link>
       <button onClick={()=>clearAllCart()} className="btn btn-outline-danger fw-bold w-50"> Clear Cart</button>
       </div>
    
       
   </div>


   :<>
   <h1 className="text-center text-danger ">Your Cart is Empty Now !</h1>

   <div className=" py-5 d-flex justify-content-center align-items-center">

<BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
       </div>
    </>
       }


<Helmet>
        <title>Cart</title>
    </Helmet>
    </>
    
    }