
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { BallTriangle } from "react-loader-spinner";


export default function Orders(){

let{data,isLoading}=useQuery('allOreders',getAllOrders)

function getAllOrders(){
   
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/`)  
   
}


    return<>

    
{isLoading?<div className="w-100 d-flex justify-content-center">
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
</div>:
    
    <div className="row">

{data?.data.data.map((order)=><div className="col-md-2"key={order.id}>

<span className="fw-bold font-sm">{order.taxPrice}</span>

</div>)}


    </div>

    
}

</>
}