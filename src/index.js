
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { UserContextProvider } from './Usercontext/Usercontext';
import {QueryClient,QueryClientProvider} from 'react-query';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"








let QClient=new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <QueryClientProvider client={QClient}>

<UserContextProvider>
      <App />
</UserContextProvider>

  </QueryClientProvider>



    
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

