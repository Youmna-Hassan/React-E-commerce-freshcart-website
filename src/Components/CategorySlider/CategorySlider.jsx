import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";


export default function CategorySlider(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
    };

let{data}=useQuery(`categories`,getCategories);

function getCategories(){

    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
}
return<>
{data?.data.data?<Slider{...settings}>
{data?.data.data.map((category)=>
    <img height={200} className= "w-100 py-2 " key={category.id} src={category.image} alt="category"/>)}


</Slider>:''}
</>

}