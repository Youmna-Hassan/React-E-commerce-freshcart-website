import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import {Helmet} from 'react-helmet'


export default function ProductDetails(){
   

    let{data}=useQuery('productdet',()=>GetSpecificProduct(id));
    
let{id}=useParams();

function GetSpecificProduct(id){

    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

<helmet>
    <title> ProductDetails</title>
</helmet>


return<>
{data?.data.data?<div className="container "><div className="row">
    
<div className="col-md-3"> 
<img src={data?.data.data.imageCover} className="w-100" alt="product not found"/>
 
    </div>
  
   
    <div className="col-md-9">
<h2 className="text-main">{data?.data.data.title}</h2>
<p >{data?.data.data.description}</p>
<h6>{data?.data.data.category.name}</h6>
<h6><span className="text-main">Price :</span> {data?.data.data.price}</h6>
<div className=" d-flex justify-content-between">
    <span> <span className="text-main">Rating :</span>{data?.data.data.ratingsQuantity}</span>
    <span><i className="fas fa-star rating-color "></i>{data?.data.data.ratingsAverage}</span>
</div>

    </div>
</div>
</div>
:''}


<Helmet>
    <title> ProductDetails</title>
</Helmet>
</>


}

