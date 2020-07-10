import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "-4rem", 
  },
  menuButton: {
    marginRight: theme.spacing(180),
    
  },
  toolbar: {
    minHeight: "",
  },
  
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.toolbar} >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >

            <MenuIcon />
          </IconButton>    


          <IconButton aria-label="search" color="inherit"> 
            <SearchIcon />
          </IconButton>

          


        </div>         
 
    </div>
  );
}