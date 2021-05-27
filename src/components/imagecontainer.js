import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPexel, inputForSearch} from '../redux/ducks/pexel';
import {SingleImage} from './singleimage';


import {Loading} from './loading';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';




export const Home = () => {
	const pics = useSelector(state => state.pexel);
	const isLoading = pics.isLoading

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getPexel())
	},[dispatch])


	return (
		<>
	{isLoading ?<Loading/> :

		
		<Grid container >
		{ pics.images.map((singlePic, index) => {
			return <SingleImage  key={index} {...singlePic} />
		})
		}

		</Grid>
	}
		</>
	
)};
