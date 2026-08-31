import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './landing_Page/home/HomePage';
import Signup from './landing_Page/signup/Signup'
import Login from './landing_Page/login/login';
import AboutPage from './landing_Page/about/AboutPage'
import ProductPage from './landing_Page/products/ProductPage'
import SupportPage from './landing_Page/support/SupportPage'
import PricingPage from './landing_Page/pricing/PricingPage'
import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import NotFound from './landing_Page/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
         <Routes>  
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/pricing' element={<PricingPage/>}/>
            <Route path='/support' element={<SupportPage/>}/>
            <Route path='*' element={<NotFound/>}></Route>

        </Routes>

       <Footer/> 

    
  </BrowserRouter>
);


