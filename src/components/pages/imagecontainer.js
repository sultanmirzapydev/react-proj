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
		//background: '#ECEFF1',
		background: 'green',
		width: '100%',
		height:'40rem',
		margin: 'auto 0',
	},
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
		<Grid item>
		<HomeSugg/>
		<Grid>
		<Grid item container>
		 <Grid item container >
		{ pics.images.map((singlePic, index) => {
			return <SingleImage  key={index} {...singlePic} />
		})
		}

		</Grid>  
		</Grid>
		</Grid>
		</>
	
)};
