import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {useParams} from "react-router-dom";
import {makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
	mainContainer : {
		width:'100%',
		height:'100vh',
	},
	subContainer: {

		marginTop:'5rem',
		width:'50%',
		height:'50%',
		borderRadius:'.4rem',
		margin:'0 auto',
		background:'#BBDEFB',
		
		
	},
	imageContainer:{
		display:'flex',
		alignItems:'center',
		width:'40%',

		
	},
	images:{
		width:'80%',
		height:'80%',
		margin:'0 auto',
		borderRadius:'.3rem',
	}
}))

export const ImageDetails = () => {
	let {id} = useParams();
	const classes = useStyles();
	

	const data = useSelector(state=> state.pexel.images)

	const item = data.find((i)=> i.id == id)
	console.log(item, item.pic)
	// const [a] = [item.map((i)=>i)]
	// console.log(a.id,'a')
	

	

	return (<>
		<Grid container  classes={{root: classes.mainContainer}}>
		<Grid item container classes={{root: classes.subContainer}}>
		<Grid container classes={{root:classes.imageContainer}}>
		<CardMedia image={`${item.pic}`} classes={{root: classes.images}}>

		</CardMedia>
		</Grid>
		</Grid>
		</Grid>
		</>);
}