import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {useParams, Link} from "react-router-dom";
import {makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import data from '../utils/data';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {getIncre,getTotal} from '../../redux/ducks/pexel';
import IconButton from '@material-ui/core/IconButton';
import { BiChevronRightSquare,BiChevronLeftSquare, BiChevronUpSquare, BiChevronDownSquare } from "react-icons/bi";
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
	mainContainer : {
		width:'100%',
		height:'100vh',
		[theme.breakpoints.down(960)] : {
			height:'21rem',
		}
	},
	secondContainer:{
		width:'53%',
		marginLeft:'10%',
		//margin:'0 auto',
		[theme.breakpoints.up(1280)] : {
			width:'45%',
			marginLeft:'16%',
		},
		[theme.breakpoints.up(1560)] : {
			width:'40%',
			marginLeft:'20%',
		},
		[theme.breakpoints.down(960)] : {
			//marginLeft:'8%',
			margin:'0 auto',
		},

	},
	subContainer: {

		marginTop:'5rem',
		width:'89%',
		height:'16rem',
		borderRadius:'.4rem',
		//margin:'0 auto',
		//marginLeft:'20%',
		background:'#DCEDC8',
		overflow:'hidden',
		zIndex:1,

		
		
	},
	imageContainer:{
		display:'flex',
		alignItems:'center',
		width:'55%',
		height:'100%',
		overflow:'hidden',
		[theme.breakpoints.up(1280)] : {
		  width:'57%',
		},

		
	},
	images:{
		width:'95%',
		height:'80%',
		margin:'0 auto',
		borderRadius:'.3rem',
		[theme.breakpoints.up(1280)] : {
			width:'80%',
		},
	},
	cardcontent:{
		position:'relative',
		marginTop:'1.3rem',
		margin:'0 auto',
		borderRadius:'.7rem',
		padding:'0rem',
		'&:last-child':{
		paddingBottom:'0rem',
	},
	},
	name:{
		marginTop:'1.4rem',
		fontSize:'1.6rem',
		fontWeight:'600',
	},
	price:{
		marginTop:'1rem',
		color:'#1B5E20',
		fontWeight:'600',
	},

	offers:{
		marginTop:'1rem',
		color:'#1B5E20',
	},
	btn: {
		marginTop:'1rem',
		textTransform:'uppercase',
		border:'.2rem solid #FF6D00',
		background:'#FFECB3',
		fontWeight:'800',
	},
	slide:{
		position:'relative',
		marginTop:'5rem',

		height:'16rem',
		//background:'#f0f0f0',
		marginLeft:'',
		//left:'1%',
		//background:'white',
		padding:'0rem',
		borderRadius:'.7rem',
		'&:last-child':{
		paddingBottom:'0rem',
	},
	},
	slide2:{
		position:'relative',
		//marginTop:'5rem',
		width:'53%',
		height:'16rem',
		margin:'0 auto',
		padding:'0rem',
		borderRadius:'.7rem',
		'&:last-child':{
		paddingBottom:'0rem',
		[theme.breakpoints.down(960)] : {
		 // width:'20rem',
		 //display:"none"
		},
	},
	},
	iconbtn:{
		cursor:'pointer',
		left:'-12%',
		padding:'0rem',
		//left:'-.36rem',
		top:'-.2rem',
		zIndex: 2,
		'&:hover mainSlide': {
			left:'0rem',
		},
		[theme.breakpoints.down(960)] : {
		 // width:'20rem',
		 display:"none"
		},
	},
	iconbtn2:{
		//transform:'rotate(90deg)',
		cursor:'pointer',
		left:'-.8%',
		padding:'0rem',
		//left:'-.36rem',
		top:'-.3rem',
		zIndex: 2,
		'&:hover mainSlide': {
			left:'0rem',
		},
		[theme.breakpoints.up(960)] : {
		 // width:'20rem',
		 display:"none"
		},
	},
	icon:{
		fontSize:'3rem',
		color:'#FF6D00',
		
	},
	icon2:{
		fontSize:'3rem',
		color:'#FF6D00',
		left:'-.5rem',
		[theme.breakpoints.up(960)] : {
		 // width:'20rem',
		 display:"none"
		},
		
	},
	mainSlide:{
		position:'absolute',
		marginTop:'-2.9rem',
		width:'22rem',
		height:'12rem',
		left:'-23rem',
		border:'.3rem solid #FF6D00',
		borderRadius:'.4rem',
		transition:'all .4s ease',
		[theme.breakpoints.down(960)] : {
		 // width:'20rem',
		 display:"none"
		},

	},
	mainSlide2:{
		position:'absolute',
		//marginTop:'-3rem',
		width:'88.4%',
		height:'12rem',
		top:'-13rem',
		marginLeft:'.1%',
		//left:'-23rem',
		border:'.3rem solid #FF6D00',
		borderRadius:'.4rem',
		transition:'all .4s ease',
		[theme.breakpoints.up(960)] : {
		 // width:'20rem',
		 display:"none"
		},
		

	},

	showslide:{
		left:'0rem',
		
	},
	showslide2:{
		top:'0rem',

		[theme.breakpoints.up(960)] : {
		 // width:'20rem',
		 display:"none"
		},
	},
	des:{
		textAlign:'center',
		fontSize:'1.2rem',
		color:'#F57F17',
		fontWeight:"600",
		display:'block',
		
		
	},
	des2:{
		textAlign:'center',
		fontSize:'1.2rem',
		color:'#F57F17',
		fontWeight:"600",
		display:'block',
		[theme.breakpoints.up(960)] : {
		 // width:'20rem',
		 display:"none"
		},
		
	},
	desText:{
		textAlign:'center',
		marginTop:'2rem',
	},
	desText2:{
		textAlign:'center',
		marginTop:'2rem',
		[theme.breakpoints.up(960)] : {
		 // width:'20rem',
		 display:"none"
		},
	}
}))

export const ImageDetails = () => {
	const [isAdd, setIsAdd] = useState(true)
	const [showSlide, setShowSlide] = useState(false)
	const dispatch = useDispatch();
	let {id} = useParams();
	const classes = useStyles();
	

	const data = useSelector(state=> state.pexel.images)
	const searchData = useSelector(state=> state.pexel.searchText)
	const isTrue = searchData ==='puppies'

	const item = data.find((i)=> i.id == id)
	console.log(item, item.pic)
	// const [a] = [item.map((i)=>i)]
	// console.log(a.id,'a')
	
	const handleAdd = (e) => {
		e.preventDefault();
		dispatch(getIncre(item.id));
		dispatch(getTotal());
		setIsAdd(false);
	};
	const handleSlide = (e) => {
		e.preventDefault();
		console.log(showSlide)
		setShowSlide(!showSlide);
	}


	

	return (<>
		<Grid container  classes={{root: classes.mainContainer}}>
		<Grid container classes={{root:classes.secondContainer}}>
		<Grid item container classes={{root: classes.subContainer}}>

		<Grid container classes={{root:classes.imageContainer}}>
		<CardMedia image={`${item.pic}`} classes={{root: classes.images}}>
		</CardMedia>
		</Grid>
		<CardContent classes={{root:classes.cardcontent}}>
		<div className={classes.name}> {isTrue? item.pname.puppies:null} </div>
		<div className={classes.price}> $ {item.p.price} </div>
		<div className={classes.offers}>off {item.offers}% </div>
		{isAdd ? 
		<Button classes={{root: classes.btn}} onClick={handleAdd}> Add to cart </Button> :
		<Link to='/cart'>
		<Button classes={{root:classes.btn}} > go to cart </Button>
		</Link>
			}
			
		</CardContent>
		
		
		</Grid>
		
		<CardContent classes={{root:classes.slide}}> 
		 
		{ showSlide ?  <IconButton classes={{root:classes.iconbtn}} onClick={handleSlide}>
		<BiChevronLeftSquare className={classes.icon}/>
		 </IconButton> : 
		<IconButton classes={{root:classes.iconbtn}} onClick={handleSlide}>
		 
		<BiChevronRightSquare className={classes.icon}/>
		</IconButton> }

		<Grid className={clsx( classes.mainSlide, {[classes.showslide]:showSlide})}>
		<Grid classes={{root:classes.des}}>
		Description
		</Grid>
		<Grid classes={{root:classes.desText}}>
		They shed moderately through the year and more heavily in summer, so a good brushing once or twice a week will help to remove dirt and old hair. The coat can be fairly easy to groom if you keep up with their needs.
		</Grid>
		</Grid>
		</CardContent>
		
		</Grid>



		</Grid>
		<CardContent classes={{root:classes.slide2}}> 
		 
		{ showSlide ?  <IconButton classes={{root:classes.iconbtn2}} onClick={handleSlide}>
		<BiChevronUpSquare className={classes.icon2}/>
		 </IconButton> : 
		<IconButton classes={{root:classes.iconbtn2}} onClick={handleSlide}>
		 
		<BiChevronDownSquare className={classes.icon2}/>
		</IconButton> }

		<Grid className={clsx( classes.mainSlide2, {[classes.showslide2]:showSlide})}>
		<Grid classes={{root:classes.des2}}>
		Description
		</Grid>
		<Grid classes={{root:classes.desText2}}>
		They shed moderately through the year and more heavily in summer, so a good brushing once or twice a week will help to remove dirt and old hair. The coat can be fairly easy to groom if you keep up with their needs.
		</Grid>
		</Grid>
		</CardContent>

		</>);
}