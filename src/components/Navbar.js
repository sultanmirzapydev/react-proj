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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BsInfoCircle } from "react-icons/bs";
import { FiLogIn,FiTrendingUp } from "react-icons/fi";
import {MdAssignmentInd } from "react-icons/md";
import { IoMdContacts  } from "react-icons/io";
import { IoLanguageOutline, IoCheckmarkOutline } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import HomeIcon from '@material-ui/icons/Home';

import clsx from 'clsx';


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

menucontainer: {
    position:'absolute',
    backgroundColor:'#E0E0E0',
    width: ' 17rem',
    margin: '0rem 0 0 0 ',
    borderRadius: '0 0 .7rem 0',
    boxShadow: '2px 4px 6px  2px rgba(0, 0, 0, 0.2)',
    animation: `$slide .6s ease`,
  
  },
  
 '@keyframes slide': {
    'from': {
      left : '-18rem'
    },
    'to': {
      left: '0'
    } 
},



menusubcon :{
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
  fontSize: '1.4rem',
  marginLeft: '2rem',
  marginBottom: '1rem',
},
menulangcon : {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.4rem',
  marginLeft: '2rem',
  marginTop: '1rem',
  marginBottom: '2rem',
},
menutext: {
  display: 'flex',
  justifyContent: 'space-between',
},
Icons : {
  marginRight: '2rem',
},

}));
  


export const Navbar = () => {
	const classes = useStyles();
	const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
  }

  
	return (
		<>

		<AppBar position='sticky' style={{overflow: 'hidden'}} 
    classes = {{ colorPrimary: classes.colorPrimary}}>
   
		<Toolbar classes = {{ regular: classes.toolBar}}>
    
   
		  <IconButton onClick = {handleClick} >
		  <MenuIcon classes = {{root: classes.menuIcon}}  />
		  </IconButton> 
    
 

		
		 <Typography classes={{root: classes.text}} variant="h6" noWrap>
            Home
          </Typography>
           <Typography classes={{root: classes.text}}  variant="h6" noWrap>
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
		
   
     { show ? <div className={classes.menucontainer}> 
     
          <div className={classes.menusubcon}>
        <div className={classes.menutext}> Home 
        <HomeIcon className={classes.Icons}/> </div>
        <div className={classes.menutext}> About 
        <BsInfoCircle className={classes.Icons}/></div>
        <div className={classes.menutext}> Log In 
        <FiLogIn className={classes.Icons}/></div>
        <div className={classes.menutext}> Register 
        <MdAssignmentInd className={classes.Icons}/></div>
        <div className={classes.menutext} > Trending 
        <FiTrendingUp className={classes.Icons}/></div>
        <div  className={classes.menutext}>  Contact 
        <IoMdContacts className={classes.Icons}/></div>
          </div>
          <hr />
          <div className={classes.menulangcon}>
            <div className={classes.menutext} style={{color:'black'}}> Language: </div>
            <div className={classes.menutext}> English 
            <IoCheckmarkOutline className={classes.Icons}/></div>
            <div className={classes.menutext}> Hindi 
            <IoLanguageOutline className={classes.Icons}/> </div>
            <div className={classes.menutext}> Telugu 
            <IoLanguageOutline className={classes.Icons}/></div>
          </div>

        </div>  : null}

		
  
		</>
		)
}