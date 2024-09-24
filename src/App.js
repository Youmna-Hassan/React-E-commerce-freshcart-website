import React from "react"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import Cart from "./Components/Cart/Cart"
import Brands from "./Components/Brands/Brands"
import Categories from "./Components/Categories/Categories"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import SignOut from "./Components/SignOut/SignOut"
import { createHashRouter } from 'react-router-dom'
import { RouterProvider } from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute/ProectedRoute"
import { UserContextProvider } from "./Usercontext/Usercontext"
import ProductDetails from "./Components/ProductDetails/ProductDetails"
import CartContextProvider from "./CartContext/CartContext"
import { Toaster } from 'react-hot-toast';
import Address from "./Components/Address/Address"
import Orders from "./Components/Orders/Orders"
import BrandItemDetails from "./Components/BrandItemDetails/BrandItemDetails"
import CategoryItemDetails from "./Components/CategoryItemDetails/CategoryItemDetails"









export default function App() {



    let routers = createHashRouter([

        {
            path: '', element: <Layout />, children: [


                { index: 'true', element: <ProtectedRoute><Home /></ProtectedRoute> },
                { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
                { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },

                { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
                { path: 'address', element: <ProtectedRoute><Address /></ProtectedRoute> },
                { path: 'orders', element: <ProtectedRoute><Orders /></ProtectedRoute> },
                { path: 'branditem/:id', element: <ProtectedRoute><BrandItemDetails /></ProtectedRoute> },
                { path: 'categoryitem/:id', element: <ProtectedRoute><CategoryItemDetails /></ProtectedRoute> },
                { path: 'login', element: <Login /> },
                { path: 'register', element: <Register /> },
                { path: 'signout', element: <SignOut /> },
                { path: 'productdetails/:id', element: <ProductDetails /> },



            ]
        }

    ])

    return <CartContextProvider>
        <UserContextProvider>

            <RouterProvider router={routers}></RouterProvider>

        </UserContextProvider>
        <Toaster />
    </CartContextProvider>






}