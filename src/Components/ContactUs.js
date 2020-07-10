import React from 'react'
import {Link} from 'react-router-dom'

import Forms from './Forms'


export const ContactUs = () => {
    return (
        <div>

        <nav>
            <Link to="/home">Home</Link> {" | "}
            <Link to="/products">Products</Link> {" | "}
            <Link to="/contactus">Contact Us</Link>
        </nav>

        <div>
            <Forms />
        </div>

        </div>
    )
}
