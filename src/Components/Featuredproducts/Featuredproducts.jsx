import axios from "axios";
import { useQuery } from "react-query";
import {BallTriangle} from 'react-loader-spinner';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { toast } from 'react-hot-toast'


export default function FeaturedProducts(){
   
    
let{addToCart}=useContext(CartContext);

async function addProductToCart(Id){
    let response = await addToCart(Id);
    if(response.data.status ==='success'){

        toast.success('product added to cart successfully')
    }
    else{
       toast.error('fail to add product')
    }
 
}
   
let {data,isLoading} = useQuery('FeaturedProducts',getFeaturedProducts);
function getFeaturedProducts(){


    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

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
   
    <div className="row mx-5">

{data?.data.data.map((product)=> <div className=" product col-md-2 col-4 py-2" key={product.id}>

<Link  to={`/productdetails/${product.id}`}className="product px-2 py-3">
    <img  className="pb-2 w-100" src={product.imageCover}alt=""/> 

<h2 className="  text-center fw-bold h5 ">{product.category.name}</h2>
<h3 className=" text-center text-main h6">{product.title.split('').slice(0,10).join('')
}</h3>

<div className= " mx-auto d-flex justify-content-between">
    <span className="text-muted">{product.price}</span>

    <span>

    <i className="fas fa-star rating-color ">{product.ratingAvarage}</i>
    </span>

</div>

</Link>
<button onClick={()=>{addProductToCart(product.id)}} className="  btn bg-main text-white fw-bold">Add To Cart</button>
</div>)}


    </div>
   
 
    
}
    </>
}