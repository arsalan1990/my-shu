import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
      
      maxWidth: 400,
      marginLeft: "35rem",
    },
    media: {
      height: 460,
    },
  });


export const ProductIndex = () => {

    const classes = useStyles();

    const shoes = {
        "Power": {
            name:  "Power",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-2030-_2_360x.jpg?v=1591259658" ,
        },

        "Skechers": {
            name: "Skechers",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-6351-_2_360x.jpg?v=1589804430",
        },

        "Sparx": {
            name: "Sparx" ,
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9265-b_360x.jpg?v=1571921197",
        },

        "Tommy Takkies": {
            name: "Tommy Takkies",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/889-9008-b_360x.jpg?v=1578651075",
        },

        "Ambassador": {
            name: "Ambassador",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/882-4095-b_360x.jpg?v=1578465104",
        },

        "Red Label - Women": {
            name:  "Red Label - Women",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/550-6543-_2_360x.jpg?v=1591616873" ,
        },

        "Mocassino": {
            name: "Mocassino",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/882-6042-b_360x.jpg?v=1566797280",
        },

        "Bubble Gummers": {
            name: "Bubble Gummers" ,
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/351-9302-_2_360x.jpg?v=1591014712",
        },

        "Marie Claire": {
            name: "Marie Claire",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/502-6040-b_360x.jpg?v=1576238616",
        },

        "Belle": {
            name: "Belle",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/604-6350-b_360x.jpg?v=1570171792",
        },

    }
    return (
        <div>
            
                {Object.entries(shoes).map(([productID,{name, img}]) =>
                (
                    
                    <ol key={productID}>
                        <Link to={productID}>

                    
                    <Card className={classes.root}>
                        <CardActionArea>  
                        <CardMedia className={classes.media}>

                        
                        <h2>{name}</h2>
                        <img src={img} alt={name} />
                        

                        <CardActions>
                        <Button size="small" color="primary">
                        Details
                        </Button>
                        <Button size="small" color="primary">
                        Add to Cart
                        </Button>
                        <Button size="small" color="primary">
                        Size Chart
                        </Button>
                        </CardActions>
                        

                        </CardMedia>
                        </CardActionArea>
                    </Card>

                        </Link>      
                    </ol>
                )
                )}             

        </div>

    )
}
