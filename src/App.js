import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import {Header} from './Components/Header'
import {Home} from './Components/Home'
import {Products} from './Components/Products'
import { ProductDetails } from './Components/ProductDetails';
import {NotFound} from './Components/NotFound'
import {ProductIndex} from './Components/ProductIndex'
import {ContactUs} from './Components/ContactUs'
import Promotion from './Components/Promotion';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        
        <Route path="home" element={<Home />}>
        
          <Route path=":productID" element={<ProductDetails />}> </Route>
                  
        </Route>

        <Route path="products" element={<Products />}>
          
          <Route path="/" element={<ProductIndex />}></Route>
          <Route path=":productID" element={<ProductDetails/>}></Route>
          
        </Route>  

        <Route path="contactus" element={<ContactUs />}></Route>

        <Route path="promotion" element={<Promotion />}></Route>

        
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
