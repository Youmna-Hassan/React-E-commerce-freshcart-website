import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";


export default function BrandItemDetails(){

let{data}=useQuery('secificbrand',()=>getBrandItemDetails(id))
let {id}=useParams();

function getBrandItemDetails(id){

    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
}

    return<>
{data?.data.data?<div  >
    
    <div > 
    <img src={data?.data.data.image} className="w-60" alt="product not found"/>
        </div>
        <div >
           <h3> <span className="text-danger fw-bold"> Name of Brand :</span> ({data?.data.data.name})</h3>

             </div>  
    </div>
     
    :''}
    
   </>
}