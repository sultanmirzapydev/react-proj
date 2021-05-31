import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inputUsername, inputPassword, getToken} from '../../redux/ducks/users';
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from "react-router-dom";
import {Alert} from '../utils/alert';
import { makeStyles,  withStyles, } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from '../material-ui/logincustom';

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused' : {
			color: 'green',
		},

		'& .MuiInput-underline:after': {
			borderBottomColor: 'black',
		},
		'& .MuiOutlinedInput-root':{
			'& fieldset': {
				borderColor: 'green',
				padding: '.1rem ',
			},
			'& input': {
				padding: '.8rem',
			},
			
			'&:hover fieldset': {
				borderColor: '#76FF03',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green',
				borderLeftWidth:6,
			},
		},
		width: '30ch',
	},
	
	
})(TextField);



export const Login = () => {
	const classes = useStyles();
	const history = useHistory();
  const path    = history.location.pathname;
  console.log(path);
	
	
	
	return (
		<>
		<Grid container   classes={{root: classes.firstcontainer}} >
		<Grid item container classes={{root: classes.secondcontainer}}>
		<Grid item>
		 <Typography variant="body1" gutterBottom classes={{root: classes.typography}}>
		 Haven't signed up, yet!! &nbsp;&nbsp;<span style={{color: 'green',}}> register here </span>
		 </Typography>
		</Grid>
		<Grid item classes={{root: classes.username}} > 
		 <CssTextField
        className=	{classes.margin}
        label="enter your username"
        variant="outlined"
        id="custom-css-outlined-input"
      	/>
		</Grid>
		<Grid item classes={{root: classes.password}} >
		<CssTextField
        className=	{classes.margin}
        label="password"
        variant="outlined"
        id="custom-css-outlined-input"
      	/>
		</Grid >
		<Grid item classes={{root: classes.loginBtn}}>
		<Button  className ={classes.buttonroot} 
		variant="outlined"   href="#outlined-buttons">
		Log in
		</Button>
		</Grid>
		</Grid >
		</Grid>
		</>
		);
};