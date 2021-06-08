import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from '../material-ui/cartcustom';
import {useDispatch, useSelector} from 'react-redux';
import {CartItem} from './cartitem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useEffect, useState} from 'react';
import {setCart} from '../../redux/ducks/cart';



export const Cart = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const [isEmpty, setIsEmpty] = useState(true);
	const cart = useSelector(state=> state.pexel.images);
	const cartItems = useSelector(state=> state.cart.items)
	const cartData = cart.filter((item)=> item.count>0);
	
	

useEffect(() => {
	if (cartData.length>0) {
		
		setIsEmpty(false);
		dispatch(setCart(cartData));
}

},[]);



	return (<>{ isEmpty ? <div className={classes.emptycart}> 
		<div className={classes.emptycontainer}> your cart is empty </div> </div> :
		<Grid container item classes={{root:classes.subcart}}>
		
		
		<Grid item container classes={{root:classes.cartitemcontainer}}>
		{cartItems.map((item, index) => {return <CartItem key={index} {...item} /> })}

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
			<div style={{height:'.25rem', width:'100%', background:'black', marginTop:".28rem", borderRadius:'.3rem'}}> </div>
			<div style={{display:'flex', marginTop:'.2rem'}}>
			 pay <span style={{flexGrow:'1',}}>  </span>$5353
			</div>
			<div style={{width:'100%', display:'flex'}}>
			<Button style={{margin:'0 auto', background:"#8E24AA",marginTop:'.8rem',color:'#263238', }} > Checkout </Button>
			</div>
			</div>

			</CardContent>
			</Grid >
		
		
		</Grid> }
	 </>
		)

}