import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPexel, inputForSearch} from '../../redux/ducks/pexel';
import {SingleImage} from './singleimage';
import {HomeSugg} from '../utils/homesugg';
import {Loading} from '../utils/loading';
import Grid from '@material-ui/core/Grid';
import { makeStyles,  withStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	firstcontainer : {
		background: '#ECEFF1',
		//gap: '1rem',
		width: '100%',
		height:'auto',
		margin: 'auto 0',
		[theme.breakpoints.down(600)] : {

		}
	},
	secondcontainer : {
		marginBottom: '1rem ',
	[theme.breakpoints.down(600)] : {
		height: '5rem',
	}
	},
	thirdcontainer : {
		background: '',

	},
	fourthcontainer : { 
		marginTop: '1rem',
		
		margin: '0 auto',
		gap: '.2rem ',
		[theme.breakpoints.between(1840,1920)] : {
			width: '80%',
		},
		[theme.breakpoints.between(1780,1840)] : {
				width:'84%',
		},
		[theme.breakpoints.between(1720,1780)] : {
			width: '85%',
		},
		[theme.breakpoints.between(1613,1720)] : {
			width: '90%',
		},
		[theme.breakpoints.between(1540,1613)] : {
			width:' 94%',

		},
		[theme.breakpoints.between(1400, 1540)] : {
				width: '84%',
		},
		[theme.breakpoints.between(1280,1400)] : {
			width: '88%',
		},
		[theme.breakpoints.between(1220,1280)] : {
			width: '90%',
		},
		[theme.breakpoints.between(1020,1220)] : {
			width: '84%',
		},
		[theme.breakpoints.between(900,1020)] : {
			width: '90%',
		},
		[theme.breakpoints.between(680, 900)] : {
			width: ' 85%',
		},
		[theme.breakpoints.between(600,680)] : {
			width: '90%',
		},
		[theme.breakpoints.between(400,600)] : {
			width: ' 85%',
		}
	},
	fifthcontainer : {
		width: 'auto',
	}

}))





export const Home = () => {
	const classes = useStyles();
	const pics = useSelector(state => state.pexel);
	const isLoading = pics.isLoading

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getPexel())
	},[dispatch])


	return (
		<>
		<Grid container classes={{root: classes.firstcontainer}}>
		<Grid item container classes={{root: classes.secondcontainer}}>
		<HomeSugg/>
		</Grid>
		<Grid item container classes={{root: classes.thirdcontainer}}>
		 <Grid item container classes={{root: classes.fourthcontainer}} >
		 
		{ pics.images.map((singlePic, index) => {
			return <SingleImage  key={index} {...singlePic} />
		})
		}
		</Grid>
		  
		</Grid>
		</Grid>
		</>
	
)};
