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
				borderColor: 'red',
			},
			'&:hover fieldset': {
				borderColor: 'yellow',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'green',
			},
		},

	},

})(TextField);




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
		background:'white',
		margin: '0 auto',
		marginTop: '3rem',
	},
	cardmediaroot : {
		
		height: '31rem',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		borderRadius: '.7em 0 0 .7em'
	},
	registeravatar : {
		
		height: '31rem',

	},
	registerform : {
		marginTop:'4rem',
		margin: '0 auto',
		height:'31rem',
	},
	 margin: {
    		margin: '0 auto',
  },

	
}));


export const Register = () => {
	const classes = useStyles();
	return (<>
			<Grid  container   classes = {{root: classes.gridmaincontainer}} >
			 <Grid item  container classes = {{root: classes.griditemsub}}>
			 <Grid item xs={5} classes = {{root: classes.registeravatar}}>
			 <CardMedia classes = {{root: classes.cardmediaroot}} image = {Registerimage} />
			 </Grid>
			 <Grid item xs={7} container direction='column' classes = {{root: classes.registerform}}>
			 	<Grid item  classes = {{root: classes.margin}}>
			 <CssTextField
			 		className={classes.margin}
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
			 	<Grid item>
			 		<CssTextField
			 		label='confirm password'
			 		id = 'confirm password'
			 		variant='outlined' />
			 	</Grid>
			 		<Grid>
			 		<Button variant="outlined" color="primary" href="#outlined-buttons">
			 		 Link
					</Button>
					</Grid>
			 </Grid>



			
			

			 </Grid>
			</Grid>
			
	 </>);
}