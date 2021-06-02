import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	firstcontiner: {
		position:'relative',
		width: '100%',
		height: '4rem',
		top:'2rem',
		background:'#CFD8DC',
		flexDirection:'row',
		borderTop:'.2rem solid #B0BEC5',
		paddingBottom:'5rem',
	},
	// secondcontainer: {
	// 	position:'relative',
	// 	width:'70%',
	// 	margin: '0 auto',
	// 	background:'#CFD8DC',
	// 	marginTop:'1rem',
	// 	height:'100%',

	// },
	topone : {
		position:'relative',
		width: 'auto',
		height:'auto',
		marginTop:'.4rem',
		margin:'0 auto',
		paddingBottom:'.4rem',
	},
	text: {
		position:'relative',
		margin:'.2rem 2rem .2rem 2rem',
		fontSize: '.9rem',
	},
	bottomone: {
		display: 'flex',
		position:'relative',
		marginTop:'.4rem',
		//marginBottom:'.5rem',
		width:'auto',
		position:'relative',
		margin:'0 auto',
		fontSize:'.9rem',
		//paddingBottom: '.5rem',
	}

}))

export const Footer = () => {
	const classes = useStyles();
	
	return (
		<>
		<Grid container classes={{root: classes.firstcontiner}} >
		
		<Grid item container classes={{root: classes.topone}}>
		<Grid item classes={{root: classes.text}}>
		Contact Us 
		</Grid>
		
		<Grid item classes={{root: classes.text}}>
		FAQ
		</Grid>
		<Grid item classes={{root: classes.text}}>
		Reviews
		</Grid>
		<Grid item classes={{root: classes.text}}>
		Blog
		</Grid>
		<Grid item classes={{root: classes.text}}>
		Legal stuff
		</Grid>
		<Grid item classes={{root: classes.text}}>
		Privacy Policy
		</Grid>
		</Grid>
		<Grid item container>
		<Grid item  classes={{root: classes.bottomone}}>
		Copyright<pre>  </pre> &copy;  <pre>  </pre> 2020-2021 <pre> </pre> Sultan Mirza <pre > </pre>  All rights reserved.
		</Grid>
		</Grid>
		</Grid>
		</>
		)
};