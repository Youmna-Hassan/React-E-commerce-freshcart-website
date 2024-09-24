import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../Usercontext/Usercontext";
import { Helmet } from "react-helmet";




export default function Login(){


    let{setUserToken}=useContext(userContext);

    let validation =yup.object({

        email:yup.string().required('email is required').email('email is not valid'),
        password :yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=?]).{8,}$/,'Your Password is Incorrect !'),


    })
    
    let navigate = useNavigate();

    let[isloading,setisloading]=useState('false')
    let[messageError,setmessageError]=useState('');

   async function handlelogin(values){
setisloading('true');
let {data}= await axios
.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
.catch((errr)=>{ 
setisloading('false');
setmessageError(`${errr.response.data.message}`)
})




if(data.message === 'success'){
    localStorage.setItem('userToken', data.token);
    setUserToken(data.token);

     setisloading('false');
    navigate('/');

    
   
}

    }

let formik = useFormik({

initialValues:{
email:'',
password:''

},

onSubmit: handlelogin

,
validationSchema:validation
}


)



    return<>

<div className="w-75 mx-auto py-4">
        <h3> Login Now:</h3>
    <form onSubmit={formik.handleSubmit}>
        
        <label htmlFor="email">Email :</label>
<input onBlur={formik.handleBlur} className="form-control mb-2" value={formik.values.email}  type="email" name="email" id="email" onChange={formik.handleChange}></input>
{formik.errors.email && formik.touched.email? <div className="alert alert-danger ">{formik.errors.email}</div>:null}


<label htmlFor="password">Password :</label>
<input  onBlur={formik.handleBlur} className="form-control mb-2" value={formik.values.password}  type="password" name="password" id="password" onChange={formik.handleChange}></input>
{formik.errors.password && formik.touched.password? <div className="alert alert-danger ">{formik.errors.password}</div>:null}


{isloading === true?  
 <button type ="button"className="btn bg-success text-white"><i className="fas fa-spinner"></i></button>
 
:

<button className=" btn bg-success text-white" disabled={!(formik.isValid && formik.dirty)} type="submit">Login</button>
}


    </form>
    
    </div>

    {messageError?<div className="alert alert-danger">{messageError}</div>:null}

    <Helmet>
    <title>Login Page</title>
</Helmet>
    </>
    
    }