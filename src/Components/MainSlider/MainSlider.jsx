import React from "react";
import Slider from "react-slick";

import slider1 from '../../../src/assets/images/slider-image-1.jpeg'
import slider2 from '../../../src/assets/images/slider-image-2.jpeg'
import slider3 from '../../../src/assets/images/slider-image-3.jpeg'
import photo1 from '../../../src/assets/images/slider-2.jpeg'
import photo2 from '../../../src/assets/images/grocery-banner-2.jpeg'



export default function MainSlider(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };


    return<>
    <div className=" row mb-3 gx-0">
<div className="col-md-9 col-7">
<Slider {...settings}>
<img height={400} className="w-100" src={slider3} alt="slider3"/>
<img height={400} className="w-100" src={slider2} alt="slider2"/>
<img height={400} className="w-100" src={slider1} alt="slider1"/>

</Slider>
</div>
<div className="col-md-3 col-5">
<img height={200} className="w-100" src={photo1} alt="photo1"/>
<img height={200} className="w-100" src={photo2} alt="phpto2"/>
</div>

    </div>
    
    
    </>
}