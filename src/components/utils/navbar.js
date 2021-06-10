import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import {Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BsInfoCircle } from "react-icons/bs";
import { FiLogIn,FiTrendingUp } from "react-icons/fi";
import {MdAssignmentInd } from "react-icons/md";
import { IoMdContacts  } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";

import HomeIcon from '@material-ui/icons/Home';
import { CgClose } from "react-icons/cg";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import useStyles from '../material-ui/navbarcustom';
import LinearProgress from '@material-ui/core/LinearProgress';
import {inputForSearch, getPexel} from '../../redux/ducks/pexel';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import { GiCancel } from "react-icons/gi";






const CustomTooltip = withStyles((theme) =>({
  tooltip: {
     maxWidth: 420,
    fontSize: theme.typography.pxToRem(12),
    //border: '1px solid #dadde9',
  }
}) )(Tooltip)



export const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [mailId, setMailId] = useState('');
  const [showFirstAlert, setShowFirstAlert] = useState(true)
  const [isCorrectMail, setIsCorrectMail] = useState(undefined)
  const [isSubClick, setIsSubClick] = useState(false);
  const [isnewsletter, setIsnewsletter] = useState(false)
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');
	const [input, setInput] = useState('');
	const [show, setShow] = useState(false);
  const history = useHistory();
  const path    = history.location.pathname;
  
  const totalData = useSelector(state => state.pexel.totalCart);
  const loadingData = useSelector(state=> state.pexel.isLoading);





useEffect(()=> {
  if (!loadingData) {
    setIsnewsletter(true);
  }
},[loadingData])

 useEffect(() => {
  const timer = setInterval(() =>{
     setProgress((val) => {
    
   if (val === 100) {
          return 100;
        }
      const diff = Math.random() * 70;
      return Math.min(val + diff, 100);

  });
  },500);
  return () => {
    clearInterval(timer);
  };
 
 },[active, path]);

    
 const handleClick = (event) => {
    event.preventDefault();
    setShow(!show);
  }
  const handleActive = (event) => {
    
    //event.preventDefault();
    setActive(event.currentTarget.textContent);
    setProgress(0);
  };
  const handleSearchInput = (event) => {
    event.preventDefault();
    const input = event.target.value
       setInput(input);

  };
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(inputForSearch(input));
   
    dispatch(getPexel(input));
  };

const handleEmailInput = (e) => {
  e.preventDefault();
  setMailId(e.target.value);
};

  const  validate = (email) =>  {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}
  


  const handleEmail = (e) => {
  
   setIsSubClick(true);
   setShowFirstAlert(false);
   if (validate(mailId)) {
    setIsCorrectMail(true);
   }
    else setIsCorrectMail(false);
  };
  const handleNews = (e) =>{
    setIsnewsletter(false)
  };
  
	return (
		<>

		<AppBar position='sticky' style={{overflow: 'hidden'}} 
    classes = {{ colorPrimary: classes.colorPrimary}}>
   
		<Toolbar classes = {{ regular: classes.toolBar, gutters: classes.gutters}}>
    
   
		  <IconButton onClick = {handleClick}  style={{padding:'0rem',marginLeft:'1%',}}>
		  {show ? <CgClose className={classes.closeIcon}/> : 
      <MenuIcon classes = {{root: classes.menuIcon}}  /> }
      
		  </IconButton> 
    
 
      <CustomTooltip arrow   title='home'>
		<Link to='/'>
    		 <Typography className={`${classes.text} ${active  ==='Home' || path ==='/' ? classes.showActive:null}`}  variant="h6" onClick={handleActive} >
            Home
          </Typography>
      </Link>
      </CustomTooltip>
      <Link to='/about'>
      <CustomTooltip arrow title='about'>
           <Typography className={`${classes.text} ${active==='About' || path ==='/about'?classes.showActive:null}`  }  variant="h6" onClick={handleActive} >
            About
          </Typography>
        </CustomTooltip>
        </Link>
          <CustomTooltip arrow title='work in progress'>
           <Typography classes={{root: classes.text}} variant="h6" >
            Trending
          </Typography>
          </CustomTooltip>

        <Link to='/login'>
        <CustomTooltip arrow title='log in here'>
           <Typography className={`${classes.text} ${active==='Log in' || path === '/login' ? classes.showActive: null}`} variant="h6"  onClick={handleActive}>
            Log in
          </Typography>
          </CustomTooltip>
        </Link>
        
        <Link to='/register'>
        <CustomTooltip  arrow title='Register'>
          <Typography className={`${classes.text} ${active === 'Register' || path === '/register'? classes.showActive:null}`} variant="h6" onClick={handleActive}>
            Register
          </Typography>
          </CustomTooltip>
        </Link>
        
          <div className={classes.root}/>
         
          
          
           <div className = {classes.search}>
          <InputBase 
          	placeholder =' e.g., nature'
          	classes = {{root: classes.inputRoot, input: classes.inputInput}} onChange={handleSearchInput} />
          </div>
          <div className = {classes.searchIcon} >

          <SearchIcon classes = {{root: classes.searchIconroot}} onClick={handleSearch}  />
          
          </div>
         <div style={{position: 'relative'}}>
         <Link to='/cart'>
          <ShoppingCartIcon className={classes.cartIcon} onClick={handleActive}/>
          
           <Typography  classes={{root:classes.totalCart}}>
          {totalData}
          </Typography>
          </Link>
           </div>     

         </Toolbar>
        <div className={classes.progressroot}>
        <LinearProgress variant='determinate' value={progress} classes={{barColorPrimary: classes.barColorPrimary}} />
        </div>
        
		</AppBar>
		{isnewsletter ? 
      <div className={classes.mainmail}>

   <div className={clsx(classes.newslettercontainer,{[classes.shownewsletter]:isnewsletter})}>
   <div className={clsx(classes.getupdates,{[classes.hideupdates]:!showFirstAlert})}> subscribe to get updates </div> 
   { isSubClick ?

   <div className={classes.alertnewsletter} >   
     
   {isCorrectMail? <div style={{ color:'green'}}> Thank your for subscribing </div> : <div> please enter correct mail id</div>} </div>
   : null}
    <div className={classes.newsletter}> signup to our newsletter : </div>
    <TextField variant="outlined" label='your email' classes={{root:classes.emailfield}} onChange={handleEmailInput} >
    </TextField >
    <Button classes={{root: classes.subbtn}} onClick={handleEmail}>
    subscribe 
    </Button>
    <Button classes={{root:classes.newsbtn}} onClick={handleNews}>
    <GiCancel className={classes.cancelbtn}/>
    </Button>
    
    </div> </div> : null}

     <div className={clsx(classes.menucontainer,
      {[classes.showSlido]:show,
        [classes.hideslido]: !show
      })}> 
     
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
            
          </div>

        </div> 

		
  
		</>
		)
}