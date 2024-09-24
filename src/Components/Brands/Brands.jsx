import React from "react"
import axios from "axios"
import { BallTriangle } from "react-loader-spinner"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"




export default function Brands() {

    let { isLoading, data, } = useQuery('allBrands', getAllBrands)

    function getAllBrands() {

        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    }
    return <>

        {isLoading ? <div className="w-100 d-flex justify-content-center">
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
        </div> :
            <div className="row">
                {data?.data.data.map((brand) => <div className="col-md-2 col-4" key={brand._id}>
                    <Link to={`/branditem/${brand._id}`}>
                        <img className="w-100 border " src={brand.image} alt="" />
                        <h3 className=" underline text-center h6"> {brand.name}</h3>

                    </Link>
                </div>)}



            </div>}
        <Helmet>
            <title>Brands</title>
        </Helmet>

    </>
}