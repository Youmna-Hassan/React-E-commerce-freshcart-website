import React from "react";
import {useFormik} from "formik";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Helmet } from "react-helmet";

export default function Address(){   
    let{onlinePayment,cartId}=useContext(CartContext);
let formik =useFormik({

    initialValues:{
    
        details:'',
        phone:'',
        city:'',
    },
    onSubmit : handleSubmit
    
    })
    

   async function handleSubmit(values){
        let response =await onlinePayment(cartId,'http://localhost:3000',values);
       window.location.href=response?.data.session.url 
    console.log(response)
    
    }





    return<>
    
    
<div className="container">
<form onSubmit={formik.handleSubmit}>
<label htmlFor="details"> Details :</label>
<input className ="form-control mb-2" type="text" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} name="details" id="details"></input>

<label htmlFor="phone"> Phone :</label>
<input  className ="form-control mb-2"value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name="phone" id="phone" ></input>

<label htmlFor="city"> City :</label>
<input  className ="form-control mb-2"value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} name="city" id="city"></input>

<button  type="submit" className="btn bg-main text-white fw-bold"> Check Out </button>


</form>
</div>
<Helmet>
        <title>Your Address </title>
    </Helmet>
    
    </>
}