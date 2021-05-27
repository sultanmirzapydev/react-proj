import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AiFillGithub } from "react-icons/ai";
import {showAlert, removeAlert} from '../redux/ducks/alertd';
import {BrowserRouter as Router,Route,Link, useLocation } from 'react-router-dom';
import { GoThreeBars } from "react-icons/go";
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  
  toolBar: {
  	minHeight: '70px',
  	
  },
  colorPrimary :{
  	backgroundColor: '#f2f5f7',
  },
  menuIcon : {
  	fontSize : '2rem',
  	color: 'black',
  	width: '2rem'
  },
  text: {
  	color: 'black',
  	marginLeft: '.5rem',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'orange',
    '&:hover': {
      backgroundColor: 'red',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    
    height: '100%',
    position: 'absolute',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconroot: {
  	fontSize:'2rem',
  	
  },
  focused: {
  	color:'green',
  },backgroundColor:'green',
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '1rem',
   	 
    paddingLeft: '3rem',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '43ch',
      },
    },
  },
}));

export const Navbar = () => {
	const classes = useStyles();
	const handleNavClick = (e) => {
		console.log('dsfl;')
	}
	return (
		<>
		<AppBar position='sticky' classes = {{ colorPrimary: classes.colorPrimary}}>
		<Toolbar classes = {{ regular: classes.toolBar}}>
		<IconButton >
		 <MenuIcon classes = {{root: classes.menuIcon}} onClick={handleNavClick} />
		 </IconButton>
		
		 <Typography classes={{root: classes.text}} variant="h6" noWrap>
            Home
          </Typography>
           <Typography classes={{root: classes.text}} variant="h6" noWrap>
            About
          </Typography>
           <Typography classes={{root: classes.text}} variant="h6" noWrap>
            Trending
          </Typography>
           <Typography classes={{root: classes.text}} variant="h6" noWrap>
            Log in
          </Typography>
          <Typography classes={{root: classes.text}} variant="h6" noWrap>
            Register
          </Typography>
          <div className={classes.root}/>
          <div className = {classes.search}>
          <div className = {classes.searchIcon}>
          <SearchIcon classes = {{root: classes.searchIconroot}} />
          </div>
          <InputBase 
          	placeholder =' Search.....'
          	classes = {{root: classes.inputRoot, input: classes.inputInput}} />
          </div>


          
		</Toolbar>
		</AppBar>


		
  
		</>
		)
}