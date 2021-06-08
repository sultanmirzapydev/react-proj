import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles,  withStyles, } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {CartItem} from './cartitem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

	subcart: {
		marginTop:'.2rem',
	},

	cartitemcontainer:{
		//width:'70%',
		//position:'absolute',
		[theme.breakpoints.up(1280)] : {
			width:'60%',
		},
		[theme.breakpoints.between(960,1280)] : {
			width:'68%',
		},
		[theme.breakpoints.down(960)] : {
			width:'100%',
			margin:'0 auto',
			justifyContent:'center',
			display:'flex',
		}
	},
	checkoutcontainer:{
		width:'20%',
		//position:'sticky',
		[theme.breakpoints.up(1280)] : {
			width:'30%',
		},
		[theme.breakpoints.between(960,1280)] : {
			width:'32%',

		},
		[theme.breakpoints.down(960)] : {
			width:'100%',
			display:'flex',
			margin:'0 auto',
			justifyContent:'center',
			
		}
	},

	checkout:{
		position:'sticky',
		width:'auto',
		height:'13rem',
		background:'#FF7043',
		color:'#424242',
		
		borderRadius:'.3rem',
		[theme.breakpoints.up(1280)] : {
			margin:'0 auto',
			marginTop:'2rem',
			width:'80%',
		},
		[theme.breakpoints.between(960,1280)] : {
			margin:'0 auto',
			marginTop:'2rem',
			width:'80%',
		},
		[theme.breakpoints.down(960)] : {
			marginTop:'1.5rem',
			width:'30rem',
		},
		[theme.breakpoints.down(510)] : {
			width:'20rem',
		}
	},
	

}));


export const Cart = () => {
	const classes = useStyles();
	const cart = useSelector(state=> state.pexel.images);
	const cartData = cart.filter((item)=> item.count>0);
	console.log(cartData);

	return (<>
		<Grid container item classes={{root:classes.subcart}}>
		
		
		<Grid item container classes={{root:classes.cartitemcontainer}}>
		{cart.map((item, index) => {return <CartItem key={index} {...item} /> })}

		</Grid>
		<Grid  item container classes={{root:classes.checkoutcontainer}}>
		<CardContent classes={{root:classes.checkout}}>
			<div className={classes.checkoutcontent}>
			<div style={{display:'flex'}}>
			 total item <span style={{flexGrow:'1',}}>  </span>53
			</div>
			<div style={{display:'flex', marginTop:'2rem'}}>
			 total <span style={{flexGrow:'1',}}>  </span>$5353
			</div>
			<div style={{display:'flex', marginTop:'.5rem'}}>
			 off <span style={{flexGrow:'1',}}>  </span>$537
			</div>
			<div style={{height:'.3rem', width:'100%', background:'black', marginTop:".2rem"}}> </div>
			<div style={{display:'flex', marginTop:'.2rem'}}>
			 pay <span style={{flexGrow:'1',}}>  </span>$5353
			</div>
			<div style={{width:'100%', display:'flex'}}>
			<Button style={{margin:'0 auto', background:"#8E24AA",marginTop:'.8rem', }} > Checkout </Button>
			</div>
			</div>

			</CardContent>
			</Grid >
		
		
		</Grid>
	 </>
		)

}