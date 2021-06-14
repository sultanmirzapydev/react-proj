import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {useParams} from "react-router-dom";
import {makeStyles } from '@material-ui/core/styles';


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
	}
}))

export const ImageDetails = () => {
	let {id} = useParams();
	const classes = useStyles();
	

	const data = useSelector(state=> state.pexel.images)
	useEffect(()=> {
		const item = data.find((item) => item.id == id)
		console.log(item)
	},[])
	
	

	

	return (<>
		<Grid container  classes={{root: classes.mainContainer}}>
		<Grid container classes={{root: classes.subContainer}}>

		</Grid>
		</Grid>
		</>);
}