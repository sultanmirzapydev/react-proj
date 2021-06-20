import React, {useEffect, useState} from 'react';
//import {inputUsername, inputPassword, getToken} from '../../redux/ducks/users';
import {Alert} from '../utils/alert';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from '../material-ui/logincustom';
import googleTrends from 'google-trends-api';
import HttpsProxyAgent  from 'https-proxy-agent';

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
				//padding: '.8rem',
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
	const freezeData = Object.freeze({email:'', password:''})
	console.log(freezeData);
	const [iData, setIData] = useState(freezeData);
	
	const handleInput = (e) => {
		
	}
	
	return (
		<>
		<Grid container   classes={{root: classes.firstcontainer}} >
		<Alert/>
		<Grid item container classes={{root: classes.secondcontainer}}>
		<Grid item>
		 <Typography variant="body1" classes={{root: classes.typography}}>
		 Haven't signed up, yet!! &nbsp;&nbsp;<span style={{color: 'green',}}> register here </span>
		 </Typography>
		</Grid>
		<Grid item classes={{root: classes.username}} > 
		 <CssTextField
        className=	{classes.margin}
        label="enter your username"
        variant="outlined"
        id="custom-css-outlined-input"
        onChange = {handleInput}
      	/>
		</Grid>
		<Grid item classes={{root: classes.password}} >
		<CssTextField
        className=	{classes.margin}
        label="password"
        variant="outlined"
        id="custom-css-outlined-input"
        onChange={handleInput}
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