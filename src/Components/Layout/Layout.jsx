import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import { useEffect } from "react";
import { useContext } from "react";
import { userContext } from "../../Usercontext/Usercontext";
import {Offline} from 'react-detect-offline';


export default function Layout(){

    let{setUserToken}=useContext(userContext);
    
useEffect(()=>{

if(localStorage.getItem('userToken')!==null){

setUserToken(localStorage.getItem('userToken'))

}

},[])
return<>

<Navbar/>
<Offline>
        <div className="text-center bg-white py-5"><i className="fas fa-wifi "> <span className="text-danger"> opps!! </span>please connect to network</i></div>
    </Offline>
<div >
<Outlet></Outlet>
</div>


<Footer/>

</>




}