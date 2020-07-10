import React from 'react'
import {Link} from 'react-router-dom'
import SpacingGrid from './SpacingGrid'
import Footer from './Footer'
import '../App.css'


export const Home = () => {
    const shoes = {
        "Home": {
            name:  "",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/files/Web_Banner_New_00000006_1728x.jpg?v=1587391114" ,
        },
    }

    return (
        <div>

            <ul>
                {Object.entries(shoes).map(([productID,{name, img}]) =>
                (
                    <ol key={productID}>
                        
                        <div className={"background"}>
                            <div className={"homeheader"}>
                                <nav>
                            <Link to="/promotion">Promotions</Link> {" | "}
                            <Link to="/products"> Stay Home Range</Link> {" | "}
                            <Link to="/products">Trending Now</Link>{" | "}
                            <Link to="/products">New Arrivals</Link>{" | "}
                            <Link to="/products">Woman</Link>{" | "}
                            <Link to="/products">Men</Link>{" | "}
                            <Link to="/products">Kids</Link>
                                </nav>
                            </div>
                        </div>

                        <div className={"strip"}>
                            <Link to="/products">New Arrival Every Month</Link>{" | "}
                            <Link to="/products">Shipping All Over Pakistan</Link>{" | "}
                            <Link to="/products">Broad Range of Shoes</Link>

                        </div>


                        <Link to={productID}>
                        <h2>{name}</h2>
                        <img width={1400} src={img} alt={name} />
                        </Link>
                    </ol>
                )
                )}
            </ul> 
                    
            <div>
                
           <Link to="/products"><SpacingGrid /></Link>

            </div>

            <div>
                
            <Footer />

            </div>


        </div>
    )
}
