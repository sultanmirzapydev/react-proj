import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";
import {showAlert, removeAlert} from '../../redux/ducks/alertd';
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
import { CgClose } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import useStyles from '../material-ui/navbarcustom';

  


export const Navbar = () => {
  const [active, setActive] = useState('');
	const classes = useStyles();
	const [show, setShow] = useState(false);
  const history = useHistory();
  const path    = history.location.pathname;
  console.log(path);
  console.log('hello')
  const handleClick = (e) => {
    setShow(!show);
  }
  const handleActive = (e) => {
    console.log(e.currentTarget.textContent)
    setActive(e.currentTarget.textContent);
  };
  
	return (
		<>

		<AppBar position='sticky' style={{overflow: 'hidden'}} 
    classes = {{ colorPrimary: classes.colorPrimary}}>
   
		<Toolbar classes = {{ regular: classes.toolBar, gutters: classes.gutters}}>
    
   
		  <IconButton onClick = {handleClick} >
		  {show ? <CgClose className={classes.closeIcon}/> : 
      <MenuIcon classes = {{root: classes.menuIcon}}  /> }
      
		  </IconButton> 
    
 

		<Link to='/'>
    		 <Typography className={`${classes.text} ${active  ==='Home' || path ==='/' ? classes.showActive:null}`}  variant="h6" onClick={handleActive} >
            Home
          </Typography>
      </Link>
      <Link to='/about'>
           <Typography className={`${classes.text} ${active==='About' || path ==='/about'?classes.showActive:null}`  }  variant="h6" onClick={handleActive} >
            About
          </Typography>
        </Link>
           <Typography classes={{root: classes.text}} variant="h6" >
            Trending
          </Typography>
        <Link to='/login'>
           <Typography className={`${classes.text} ${active==='Log in' || path === '/login' ? classes.showActive: null}`} variant="h6"  onClick={handleActive}>
            Log in
          </Typography>
        </Link>
        <Link to='/register'>
          <Typography className={`${classes.text} ${active === 'Register' || path === '/register'? classes.showActive:null}`} variant="h6" onClick={handleActive}>
            Register
          </Typography>
        </Link>
          <div className={classes.root}/>
         
          
          
           <div className = {classes.search}>
          <InputBase 
          	placeholder =' Search....'
          	classes = {{root: classes.inputRoot, input: classes.inputInput}} />
          </div>
          <div className = {classes.searchIcon} >
          <SearchIcon classes = {{root: classes.searchIconroot}}   />
          </div>
                   
         <div style={{position: 'relative'}}>
          <ShoppingCartIcon className={classes.cartIcon}/>
           <Typography  classes={{root:classes.totalCart}}>
          7
          </Typography>
           </div>     

         </Toolbar>
        
        
		</AppBar>
		
   
     <div className={clsx(classes.menucontainer,
      {[classes.showSlido]:show})}> 
     
          <div className={classes.menusubcon}>
          <Link to='/'>

        <div className={classes.menutext}> Home 
        <HomeIcon className={classes.Icons}/> </div>  </Link>
        <Link to='/about'>
        <div className={classes.menutext}> About 
        <BsInfoCircle className={classes.Icons}/></div> </Link>
        <Link to='/login'>
        <div className={classes.menutext}> Log In 
        <FiLogIn className={classes.Icons}/></div> </Link>
        <Link to='/register'>
        <div className={classes.menutext}> Register 
        <MdAssignmentInd className={classes.Icons}/></div>  </Link>
        <div className={classes.menutext} > Trending 
        <FiTrendingUp className={classes.Icons}/></div>
        <div  className={classes.menutext}>  Contact 
        <IoMdContacts className={classes.Icons}/></div>
          </div>
          <hr />
          <div className={classes.menulangcon}>
            <div  style={{color:'black',fontSize:'1.4rem', 
            paddingLeft:'.5rem',marginBottom:'.6rem'}}> Language: </div>
            <div className={classes.menutext}> English 
            <IoCheckmarkOutline className={classes.Icons}/></div>
            <div className={classes.menutext}> Hindi 
            <IoLanguageOutline className={classes.Icons}/> </div>
            <div className={classes.menutext}> Telugu 
            <IoLanguageOutline className={classes.Icons}/></div>
          </div>

        </div> 

		
  
		</>
		)
}