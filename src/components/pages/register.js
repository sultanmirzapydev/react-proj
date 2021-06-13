import React from 'react';
import {Alert} from '../utils/alert';
import Grid from '@material-ui/core/Grid';
import {  withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Registerimage from '../../images/registeravatarmd.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from '../material-ui/registercustom';
import {Link} from 'react-router-dom';



const CssTextField = withStyles({
	root: {
		'& label.Mui-focused' : {
			color: 'green',
			//fontSize:'.8rem',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'black',
		},
		'& .MuiOutlinedInput-root':{
			'& fieldset': {
				borderColor: 'green',
				//fontSize:'.8rem',
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





export const Register = () => {
	const classes = useStyles();


	
	return (<>
			<Grid  container   classes = {{root: classes.gridmaincontainer}} >
			<Alert/>
			 <Grid item  container classes = {{root: classes.griditemsub}}>
			 <Grid item  classes = {{root: classes.registeravatar}}>
			 <CardMedia classes = {{root: classes.cardmediaroot}} image = {Registerimage} />
			 </Grid>
			 <Grid item  container  direction='column' classes = {{root: classes.registerform}}>
			 <div style={{ margin:'0 auto',fontSize:'.9em'}}> Already a member? 
			 <Link to='/login'>
			 <span style={{ color: '#1B5E20', cursor:'pointer'}}> log in </span>
			 </Link>
			  </div> 

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