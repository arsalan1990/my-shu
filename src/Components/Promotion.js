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
      height: 500,
    },
  });

export const Promotion = () => {
    const classes = useStyles();

    const shoes = {
        "Power": {
            name:  "Power",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/828-2030-_2_360x.jpg?v=1591259658" ,
            pro: <h4>Rs.1199/-</h4>
        },

        "Skechers": {
            name: "Skechers",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/848-6351-_2_360x.jpg?v=1589804430",
            pro: <h4>Rs.1,099/-</h4>
        },

        "Sparx": {
            name: "Sparx" ,
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/851-9265-b_360x.jpg?v=1571921197",
            pro: <h4>Rs.1,599/-</h4>
        },

        "Red Label - Women": {
            name:  "Red Label - Women",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/550-6543-_2_360x.jpg?v=1591616873" ,
            pro: <h4>Rs.1,859/-</h4>  
        },

        "Mocassino": {
            name: "Mocassino",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/882-6042-b_360x.jpg?v=1566797280",
            pro: <h4>Rs.2,149/-</h4>
        },

        "Belle": {
            name: "Belle",
            img: "https://cdn.shopify.com/s/files/1/0143/1552/0054/products/604-6350-b_360x.jpg?v=1570171792",
            pro: <h4>Rs.2,099/-</h4>
        },

    }
    return (
        <div>
        <div>
            <nav>
            <Link to="/home">Home</Link> {" | "}
            <Link to="/products">Products</Link> {" | "}
            <Link to="/promotion">Promotions</Link>
            </nav>
        </div>


<div>
          
{Object.entries(shoes).map(([productID,{name, img, pro}]) =>
(
    
    <ol key={productID}>
        <Link to={productID}>
        
    <Card className={classes.root}>
        <CardActionArea>  
        <CardMedia className={classes.media}>
        
        <h2>{name}</h2>
        <h2>{pro}</h2>
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
</div>
    )
}

export default Promotion;