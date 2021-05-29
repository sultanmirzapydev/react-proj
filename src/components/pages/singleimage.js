import React, {useState, useEffect} from 'react';

import {setLiked,getIncre,getTotal, getDecre,getRemove} from '../../redux/ducks/pexel';
import {useDispatch, useSelector} from 'react-redux';

import {showAlert, removeAlert} from '../../redux/ducks/alertd';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '10rem',
		width: '10rem',
	}
}));



export const SingleImage = (data) => {
	const classes = useStyles();
	
	const dispatch = useDispatch();
	   
	const showDbtn = data.count>0;

	
	

	return (<>
			<Card>
			<CardMedia image={`${data.pic}`} classes={{root: classes.root}}/>

			</Card>
	 </>)
};







