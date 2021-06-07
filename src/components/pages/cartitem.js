import React from 'react';
import { makeStyles,  withStyles, } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
	cardRoot: {
		marginTop:'2rem',
		display:'flex',
		width:' 50rem',
		margin:'0 auto',
		background:'grey',
		borderRadius:'.7rem',
	},
	imgcontainer : {
		width:'30%',

	},
	cardcontent:{
		display:'flex',
	},
	img: {
		height: 0,
    paddingTop: '56.25%',
		margin:'0 auto',
		backgroundSize:'cover',
		backgroundPosition:'center',
	}
}))

export const CartItem = (item) => {
	const classes = useStyles();


	return (<> 
			<Card className = {classes.cardRoot} >
			<div className={classes.imgcontainer}>
			<CardMedia className = {classes.img} title='cartimg'  image={`${item.pic}`} />
			</div>
			<CardContent className = {classes.cardcontent}>

			<Typography>
			{item.id}
			</Typography>
			<Typography >
			{item.id }

			</Typography>

			</CardContent>
			</Card>
		</>)
}