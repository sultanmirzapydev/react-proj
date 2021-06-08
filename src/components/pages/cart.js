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

}));


export const Cart = () => {
	const classes = useStyles();
	const cart = useSelector(state=> state.pexel.images);
	const cartData = cart.filter((item)=> item.count>0);
	console.log(cartData);

	return (<>
		<Grid container >
		<Grid item container>
		{cart.map((item, index) => {return <CartItem key={index} {...item} /> })}

		</Grid>
		<Card classes={{root:classes.checkout}}>
			<CardContent classes={{root: classes.checkoutcontent}}>
			<div>
			
			</div>
			</CardContent>
			</Card>
		</Grid>
	 </>
		)

}