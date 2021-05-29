import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inputUsername, inputPassword, getToken} from '../../redux/ducks/users';
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from "react-router-dom";
import {Alert} from '../utils/alert';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
	firstcontainer: {
		width: '100%',
		height: '50rem',	
	},
	secondcontainer : {
		width: '60%',
		margin: '0 auto',
	}
	}))
		


export const Login = () => {
	const classes = useStyles();
	
	
	
	return (
		<>
		<Grid container   classes={{root: classes.firstcontainer}} >
		<Grid item container classes={{root: classes.secondcontainer}}>

		</Grid>
		</Grid>
		</>
		);
};