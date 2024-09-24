import React from "react"
import axios from "axios"
import { useQuery } from "react-query"
import { BallTriangle } from "react-loader-spinner"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"


export default function Categories(){
 let {data,isLoading}=useQuery('allcategories',getAllCategories)

function getAllCategories(){


    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
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
    {data?.data.data.map((category)=><div className=" py-3 col-md-2 col-4" key={category._id}>
<Link to={`/categoryitem/${category._id}`}>
<img height ={200}className=" w-100 border " src={category.image} alt=""/>
<a className=" underline text-center h6"> {category.name}</a>

</Link>
    </div>)}

    
    </div>}

    <Helmet>
    <title>Categories</title>
</Helmet>
</>
}