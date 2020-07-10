import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import logo from './logo.png';

export const Header = () => {
    return (

        <div>
        
         <div className={"header"}>  
                Upto 50% off {" "}
                <Link to="products"><button type={"button"} className={"button"}>Shop Now</button></Link>
        </div>
<br />
        <div className={"header"}> 
        <nav>
            <Link to="home">Home</Link> {" | "}
            <Link to="products">Products</Link> {" | "}
            <Link to="contactus">Contact Us</Link>
        </nav>
        </div>

<br />
{/* LOGO */}
        <div className={"name"}>
            
    <Link to="products"><img src={logo} alt={"logo"} style={{ width:150, height:150, borderRadius:150/2, backgroundColor:"lightYellow" }}/></Link>    
        
        </div>
        

        </div>
    )
}
