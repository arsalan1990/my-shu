import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: "8rem",
  },
  media: {
    height: 140,
    
  },
});

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    
    <div className={"row"}>

    <div className={"column"}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://www.servis.com/wp-content/uploads/2019/11/ND-IJ-0006-Black-01-1200x800.jpg"
          title="ND-IJ-0006"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Men
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Balance your move all day with shoes designed to provide you with comfort, flexibility and casual spirit. 
          Our Casual shoes are specifically engineered with patent technologies to provide a balanced natural motion 
          with every step you take.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          Size Chart
        </Button>
      </CardActions>
    </Card>
    </div>
 
 <div className={"column"}>
 <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://www.servis.com/wp-content/uploads/2019/11/ND-FH-0091-Grey-2-247x247.jpg"
          title="ND-IJ-0006"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Women
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Our high-end women's shoe production line has the latest equipment and technology.
          Full computer control and refinement operation. Our production line focues on trending, 
          featuring the new modular combination, high efficiency, flexible and high-quality production.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          Size Chart
        </Button>
      </CardActions>
    </Card>
    </div>

    <div className={"column"}>
 <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.shopify.com/s/files/1/0143/1552/0054/products/301-2249-_2_360x.jpg?v=1591009428"
          title="ND-IJ-0006"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kids
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          These trainers are the perfect combination of style and comfort for your kid.
          They feature rubber sole with secure lace fastenings for added appeal.
          Are available in different designs which are perfect for every occasion & every jump they make.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          Size Chart
        </Button>
      </CardActions>
    </Card>
    </div>
 
    </div>
 )
}