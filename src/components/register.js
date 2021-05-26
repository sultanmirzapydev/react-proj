import React from 'react';
import {Alert} from './alert';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import Registerimage from '../images/registeravatarmd.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import LockIcon from '@material-ui/icons/Lock';


const useStyles = makeStyles((theme) => ({
	gridmaincontainer : {
		background: '#ECEFF1',
		width: '100%',
		height:'50rem',
		margin: 'auto 0',
	},
	griditemsub: {
		borderRadius: '.7rem',
		width: '70%',
		height: '31rem',
		background:'#F1F8E9',
		margin: '0 auto',
		marginTop: '3rem',
		boxShadow: '2px 4px 6px  3px rgba(0, 0, 0, 0.2)',

		[theme.breakpoints.down(600)]: {
			width: '90%',
			height: '28rem',
		},
		[theme.breakpoints.down(960)] : {

			width: '85%',
			height: '31rem',
		}
	},
	cardmediaroot : {
		width:'100%',
		height: '31rem',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		borderRadius: '.7em 0 0 .7em',

		[theme.breakpoints.down(600)]: {
      		width: '0%',
      	
    	},
	},
	registeravatar : {
		
		height: '31rem',
		width: '50%',

		[theme.breakpoints.down(600)]: {
			width: '0%',
		}

	},
	registerform : {
		width: '50%',
		marginTop:'7rem',
		margin: '0 auto',
		height:'31rem',
		[theme.breakpoints.down(600)]: {
			width:'100%',
			marginTop:'6rem'
		}
	},
	 registerfield: {

	 		width:'100%',
    		margin: '0 auto',

    	[theme.breakpoints.down(600)]: {
    		margin: '0 auto',
    		width: '100%',
    	}
 	 },
 	 margin : {
 	 	margin: '0 auto',
 	 	marginTop: '.9rem',
 	 },
 	buttonroot : {
 		width: '16.7rem',
 		padding: '.7rem',
 		background: 'linear-gradient(210deg, #2196F3 30%, #21CBF3 90%)',
 		outline: 'none',
 		boxShadow: '1px 3px 7px 2px rgba(33, 203, 243, .3)',
 	}

	
})); 


const CssTextField = withStyles({
	root: {
		'& label.Mui-focused' : {
			color: 'green',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'green',
		},
		'& .MuiOutlinedInput-root':{
			'& fieldset': {
				borderColor: 'green',
			},
			'&:hover fieldset': {
				borderColor: 'yellow',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green',
			},
		},
		width: '30ch',
	},
	
})(TextField);





export const Register = () => {
	const classes = useStyles();
	return (<>
			<Grid  container   classes = {{root: classes.gridmaincontainer}} >
			 <Grid item  container classes = {{root: classes.griditemsub}}>
			 <Grid item  classes = {{root: classes.registeravatar}}>
			 <CardMedia classes = {{root: classes.cardmediaroot}} image = {Registerimage} />
			 </Grid>
			 <Grid item  container  direction='column' classes = {{root: classes.registerform}}>
			 <div style={{ margin:'0 auto',fontSize:'1.3em'}}> Aready a member? 
			 <span style={{ color: '#1B5E20', cursor:'pointer'}}> log in </span> </div>
			 <Grid item classes={{root: classes.margin}}>
			 	
			 <CssTextField
					
			 		label='Enter your email'
			 		id = 'email'

			 		variant='outlined' />
			 		
			 	</Grid>
			 	<Grid item classes = {{root: classes.margin}}>
			 		<CssTextField
			 		label='Enter your password'
			 		id = 'password'
			 		variant='outlined' />
			 	</Grid >
			 	<Grid item classes = {{ root: classes.margin}}>
			 		<CssTextField
			 		label='confirm password'
			 		id = 'confirm password'
			 		variant='outlined' />
			 	</Grid>
			 	<Grid classes = {{root: classes.margin}}>
			 		<Button  className ={classes.buttonroot} 
			 		variant="outlined"   href="#outlined-buttons">
			 		  Sign  Up 
					</Button>
				</Grid>
			 </Grid>



			
			

			 </Grid>
			</Grid>

			
			
	 </>);
}