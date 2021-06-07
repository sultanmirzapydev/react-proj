import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles,  withStyles, } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {CartItem} from './cartitem';

const useStyles = makeStyles((theme) => ({

}));


export const Cart = () => {
	const cart = useSelector(state=> state.pexel.images);
	const cartData = cart.filter((item)=> item.count>0);
	console.log(cartData);

	return (<>
		<Grid container >
		<Grid item container>
		{cart.map((item, index) => {return <CartItem key={index} {...item} /> })}

		</Grid>
		</Grid>
	 </>
		)

}