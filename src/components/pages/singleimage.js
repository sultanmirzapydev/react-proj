import React, {useState, useEffect} from 'react';
import {setLiked,getIncre,getTotal, getDecre,getRemove} from '../../redux/ducks/pexel';
import {useDispatch, useSelector} from 'react-redux';
import {showAlert, removeAlert} from '../../redux/ducks/alertd';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import { GoVerified } from "react-icons/go";
import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles((theme) => ({
	flexgrow: {
    flexGrow: 1,
    [theme.breakpoints.down(420)] : {
      flexGrow: .4,
    },
},
	firstcontainer: {
		position: 'realative',
		marginBottom: '2rem',
		borderRadius: '.7rem',
		margin: '0 auto',
	},
	grid : {
		width: '25%',
		margin: '0 auto',
	},
	cardmedia: {
		height: '14rem',
		width: '18rem',
		[theme.breakpoints.down(600)] : {
			height: '8rem',
			width: '8rem',
		}
	},
	getPexelPeople : {

	},
	toolbar : {
		
		//justifyContent: 'center',
	},

	toolbarregular : {
		minHeight: '3.5rem ',
		borderRadius: '2rem ',
	},
	gutters : {
		padding: '0rem',
		
		[theme.breakpoints.down(600)] : {
			padding: '0rem ',
		}
	},
	avatar: {
		marginRight: '3% ',
		width: '30px', 
		height: '30px',
		marginLeft: '3%',
	},
	name: {
		fontSize: '.8rem ',
		marginLeft: '2%',
	},
	totalviews : {
		marginRight: '4%',
		fontSize: '.8rem',
	},
	formcontrol: {
		marginRight: '1% ',
	},
	verified: {
		color: '#0288D1',
		marginLeft: '2%',
	}
}));



export const SingleImage = (data) => {
	const classes = useStyles();
	
	const dispatch = useDispatch();
	   
	const showDbtn = data.count>0;

	
	

	return (<>
		<Grid container classes={{root: classes.grid}}>
			<Card classes={{root: classes.firstcontainer}}>
			<CardMedia image={`${data.pic}`} classes={{root: classes.cardmedia}}/>
			<Toolbar classes={{root: classes.toolbar, gutters: classes.gutters,regular: classes.toolbarregular, }}>
			
			
			<Avatar src={`${data.propic}`} classes= {{ root: classes.avatar}} />
			 <div className={classes.name}> by , <span> {data.name}  </span> </div>
			 <GoVerified className= { classes.verified}> </GoVerified>
			 <div className={classes.flexgrow}/>
			 <FormControlLabel classes={{root: classes.formcontrol}}
			control={<Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>} />
			<div className={classes.totalviews}> {data.total_views} </div>
			 </Toolbar>
			 
			</Card>
		</Grid>
	 </>)
};







