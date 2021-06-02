import React from 'react';
import { makeStyles,  withStyles, } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=> ({
	firstcontainer: {
		width:'100%',
		height:'33rem',
	},
	seconcontainer: {
		marginTop: '2rem',
		position:'relative',
		width: '70%',
		margin:'0 auto',
		background:'#FB8C00',
		borderRadius: '2rem',
	},
	loading : {
		position: 'absolute',
		fontSize: '5rem',
		top:'4rem',
		left: '3%',
	},
	secondtext: {
		position:'absolute',
		fontSize: '3rem',
		top:'17rem',
		left: '30%',
	}
}))


export const Loading = () => {
	const classes = useStyles();

	return (<> 
		<Grid container classes = {{root:classes.firstcontainer}}>
		<Grid item container classes={{root: classes.seconcontainer}}>
		<Grid item classes={{root: classes.loading}}>
		Loading.......
		</Grid>
		<Grid item classes={{root: classes.secondtext}}>
		getting data from API
		</Grid>
		</Grid>
		</Grid>
		
		</>)
}