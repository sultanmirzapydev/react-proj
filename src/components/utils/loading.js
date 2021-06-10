import React from 'react';
import { makeStyles,  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme)=> ({
	firstcontainer: {
		width:'100%',
		height:'33rem',
		[theme.breakpoints.down(700)] : {

		}
	},
	seconcontainer: {
		marginTop: '2rem',
		position:'relative',
		width: '70%',
		margin:'0 auto',
		background:'#FB8C00',
		borderRadius: '2rem',
		boxShadow: '2px 4px 6px  3px rgba(0, 0, 0, 0.2)',

		[theme.breakpoints.down(700)] : {
			height:'26rem',
		}
	},
	loading : {
		position: 'absolute',
		fontSize: '5rem',
		top:'4rem',
		left: '3%',
		[theme.breakpoints.down(700)]: {
			fontSize:' 3rem',
			top:'6rem',
			left: '9%',
		},
		[theme.breakpoints.down(420)] : {
			fontSize:'2rem',
		}
	},
	secondtext: {
		position:'absolute',
		fontSize: '3rem',
		top:'17rem',
		left: '30%',
		[theme.breakpoints.down(700)] : {
			fontSize: '2rem',
			top:'14rem',
			left: '25%',
		}
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