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
import useStyles from '../material-ui/cartitemcustom';



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
			<Grid container classes={{root:classes.maincon}}>

			<Card className = {classes.cardroot} >
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