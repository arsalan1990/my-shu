import React from 'react';
import SearchBar from './SearchBar'
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

var style = {
    backgroundColor: "lightYellow",
    borderTop: "2px solid red",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>

            <div style={phantom} />
            <div style={style}>
                { children }
            
                <div style={{color: "black"}}>
                
                <b>Welcome!!!</b> 
                
            </div>

        <div>
        
        <IconButton> <FontAwesomeIcon icon={faInstagram} size="1x" /> </IconButton> {" "}
        <IconButton> <FontAwesomeIcon icon={faTwitter} size="1x" /> </IconButton>  {" "}
        <IconButton> <FontAwesomeIcon icon={faFacebook} size="1x" /> </IconButton> {" "} 
        <IconButton> <FontAwesomeIcon icon={faYoutube} size="1x" /> </IconButton> {" "}
          
          </div>
            
            <div>
            <SearchBar />
            </div>



            </div>
        </div>
    )
}

export default Footer