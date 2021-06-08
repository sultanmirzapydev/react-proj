import React from 'react';
import { makeStyles,  withStyles, } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import {getDecre,getIncre, getTotal} from '../../redux/ducks/pexel';
import {useDispatch, useSelector} from 'react-redux';



const useStyles = makeStyles((theme) => ({
	cardRoot: {
		marginTop:'1.5rem',
		display:'flex',
		width:' 40%',
		//height:'100%',
		margin:'0 auto',
		background:'#CFD8DC',
		borderRadius:'.7rem',
		[theme.breakpoints.down(900)] : {
			width:'70%',
		},
		[theme.breakpoints.down(600)] : {
			width:'90%',
		},
		[theme.breakpoints.up(1400)] : {
			width:'40%',
		}

	},
	imgcontainer : {
		width:'40%',


	},
	cardcontent:{
		width:'40%',
		marginLeft:'2%',
		display:'flex',
		flexDirection:'column',
		//paddingBottom:'0rem',
		'&:last-child':{
			paddingBottom:'0rem',
		}
	},
	img: {
		height: '100%',
    	//paddingTop: '56.25%',
		margin:'0 auto',
		backgroundSize:'cover',
		backgroundPosition:'center',
	},
	puppies:{
		color:'#546E7A',
		marginTop:'0rem',
		marginLeft:'1.7rem',
		fontSize:'1.2rem',
		fontWeight:'700',
	},
	price: {
		marginTop:'.5rem',
		marginLeft:'1.7rem',
		fontWeight:'500',
	},
	offers:{
		marginTop:'.7rem',
		marginLeft:'1.7rem',
		color:'#2E7D32',
	},
	remove: {
		cursor:'pointer',
		width:'6rem',
		marginTop:'.5rem',
		marginLeft:'1.2rem',
		background:'#FF7043',
		color:'#546E7A',
		fontWeight:'600',
		'&:hover': {
			background:"#FF7043",
		}
	},
	logiccontainer: {
		position:'relative',
		marginTop:'1rem',
		float:'left',
		marginLeft:'8%',
		[theme.breakpoints.up(1600)] : {
			marginLeft:'12%',
		}

	},
	uparrow:{
		fontSize:'1.5rem',
		color:'green',
		cursor:'pointer',
	},
	downarrow: {
		marginTop:'.4rem',
		fontSize:'1.5rem',
		fontWeight:'800',
		color:'green',
		cursor:'pointer',
	},
	itemcount:{
		fontSize:'1.3rem',
		fontWeight:'600',
		marginLeft:'.4rem',
	}
}))

export const CartItem = (item) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleRemove = (e) => {
		e.preventDefault();


	};
	const handleIncrement = (e) => {
		e.preventDefault();
		dispatch(getIncre(item.id));
		dispatch(getTotal());
	};
	const handleDecrement = (e) => {
		e.preventDefault();
		dispatch(getDecre(item.id));
		dispatch(getTotal());
	};


	return (<> 
			<Grid container>
			<Card className = {classes.cardRoot} >
			<div className={classes.imgcontainer}>
			<CardMedia className = {classes.img} title='cartimg'  image={`${item.pic}`} />
			</div>
			<CardContent classes = {{root:classes.cardcontent}}>

			<div className={classes.puppies}> {item.puppies} </div>
			<div className={classes.price}> $   {item.price} </div>
			<div className={classes.offers}> {item.offers}% off </div>
			<Button classes={{root: classes.remove}} onClick={handleRemove}> remove </Button>

			</CardContent>
			<CardContent className={classes.logiccontainer}>
			<IoIosArrowUp className={classes.uparrow} onClick={handleIncrement}/>
			<div className={classes.itemcount}> {item.count} </div>
			<IoIosArrowDown className={classes.downarrow} onClick={handleDecrement}/>
			</CardContent>
			</Card>
			</Grid>
		</>)
}