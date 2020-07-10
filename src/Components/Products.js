import React from 'react'
import { Outlet, Link } from 'react-router-dom'




export const Products = () => {

    return (
        <div>
           
            <h1>Products</h1>
        
            <nav>
            <Link to="/home">Home</Link> {" | "}
            <Link to="/products">Products</Link>
            </nav>

            <div>  
            <Outlet />
            
            </div>
            
        </div>
    )
}

export default Products;
