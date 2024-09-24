import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";




export default function Register() {
    let navigate = useNavigate();
    let [isloading, setisloading] = useState(false);
    let [messageError, setmessageError] = useState('');

    let Validation = yup.object({

        name: yup.string().required('name is required').min(3, 'name minlength is 3').max(25, 'name maxlength is 25'),
        email: yup.string().required('email is required').email('email is not valid'),
        password: yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=?]).{8,}$/, '(at least 8 characters, must include lowercase, uppercase, digits, and special characters)'),
        rePassword: yup.string().required(' must match with password '),
        phone: yup.string().required('phone is required').matches(/^01[0-9]{9}$/, 'phone must start with 01 then any 9 digits(0-9)')
    })

    async function handleRegister(values) {
        setisloading(true);
        let { data } = await axios
            .post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
            .catch((err) => {
                setisloading('false');
                setmessageError(`${err.response.data.message}`)
            })


        if (data.message === 'success') {
            setisloading(false);
            navigate('/login');

        }
    }





    let formik = useFormik({
        initialValues: {


            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: '',
        },

        validationSchema: Validation,

        onSubmit: handleRegister


    })

    return <>

        <div className="w-75 mx-auto py-4">
            <h3> Register Now:</h3>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="name">Name :</label>
                <input onBlur={formik.handleBlur} className="form-control mb-2" value={formik.values.name} type="text" name="name" id="name" onChange={formik.handleChange}></input>
                {formik.errors.name && formik.touched.name ? <div className="alert alert-danger  ">{formik.errors.name}</div> : null}

                <label htmlFor="email">Email :</label>
                <input onBlur={formik.handleBlur} className="form-control mb-2" value={formik.values.email} type="email" name="email" id="email" onChange={formik.handleChange}></input>
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger ">{formik.errors.email}</div> : null}

                <label htmlFor="password">Password :</label>
                <input onBlur={formik.handleBlur} className="form-control mb-2" value={formik.values.password} type="password" name="password" id="password" onChange={formik.handleChange}></input>
                {formik.errors.password && formik.touched.password ? <div className="alert alert-danger ">{formik.errors.password}</div> : null}

                <label htmlFor="rePassword">Repassword :</label>
                <input onBlur={formik.handleBlur} className="form-control mb-2" value={formik.values.rePassword} type="password" name="rePassword" id="rePassword" onChange={formik.handleChange}></input>
                {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger ">{formik.errors.rePassword}</div> : null}

                <label htmlFor="phone">Phone :</label>
                <input onBlur={formik.handleBlur} className="form-control mb-2" value={formik.values.phone} type="tel" name="phone" id="phone" onChange={formik.handleChange}></input>
                {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger ">{formik.errors.phone}</div> : null}

                {isloading === true ?
                    <button type="button" className="btn bg-success text-white"><i className="fas fa-spinner"></i></button>

                    :
                    <button className=" btn bg-success text-white" disabled={!(formik.isValid && formik.dirty)} type="submit"> Register</button>
                }
            </form>

        </div>

        {messageError ? <div className="alert alert-danger">{messageError}</div> : null}


        <Helmet>
            <title>Regiser page</title>
        </Helmet>
    </>

}