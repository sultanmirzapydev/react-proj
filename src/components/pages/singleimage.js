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
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { MdDelete } from "react-icons/md";
import { FiCircle } from "react-icons/fi";
import Icon from '@material-ui/core/Icon';
import { GiSquare } from "react-icons/gi";
import Button from '@material-ui/core/Button';
import { FaOpencart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import AddIcon from '@material-ui/icons/Add';
import { FiMinus } from "react-icons/fi";
import clsx from 'clsx';




const useStyles = makeStyles((theme) => ({
	flexgrow: {
    flexGrow: 1,
    [theme.breakpoints.down(420)] : {
      flexGrow: .4,
    },
},
	firstcontainer: {
		position: 'relative',
		marginBottom: '2rem',
		borderRadius: '.9rem',
		margin: '0 auto',
		width: '12rem',
		boxShadow: '2px 2px 20px 6px rgba(0, 0, 0, 0.2)',
		[theme.breakpoints.between(960,1280)] : {

		},

	},
	grid : {
		width: 'auto',
		margin: '0 auto',
	},
	cardmedia: {
		height: '14rem',
		width: 'auto',
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
		marginRight: '2%',
		fontSize: '.8rem',
	},
	formcontrol: {
		marginRight: '1% ',
		'& span': {
			
		}
	},
	verified: {
		color: '#0288D1',
		marginLeft: '2%',
	},
	moreiconbutton: {
		position: 'absolute',
		left: '13rem',
		color: '#E65100',
	},
	deliconbutton: {
		position: 'absolute',
		left: '11rem ',

		color: '#E65100', 
	},
	// square: {
	// 	position: 'absolute',
	// 	color: '#E65100',
	// 	width:'2rem',
	// 	background:'red',
	// 	zIndex: 2,
		
		
	// 	fontSize: '1.5rem ',
	// 	'& svg': {
			
	// 	}


	
	datacountcontainer : {

		left: '.4rem',
		top: '.6rem', 
		margin: '0 auto',
		position: 'absolute',
		//border: '.2rem solid orange', 
		width:'2rem',
		background:'#FF6F00',
		//background: '#616161',
		borderRadius: '.5rem',
		
	},
	datacount : {
		//position: 'absolute',
		color: 'white',
		marginLeft:'.4rem',
		fontWeight: '600',
		fontSize: '1.1rem',
	},
	opencartcontainer : {
		position: 'absolute',
		top: '2rem',
		left: '.5rem',
		color:'#FF6F00',
	},
	plusbtn : {
		position: 'absolute',
		top:'4.2rem',
		left: '.3rem',

		minWidth: '1rem',
		border:'.6rem ',
		padding: ' 0rem' ,
		//color: '#FF6F00',
		//background: 'green',
		
	},
	plusbtnsub : {
		fontSize: '1.2rem',
		background: 'green',
		width: '2rem' ,
		height: ' 2rem',
		padding:' 0rem' ,
		borderRadius: ' .5rem  ',
		//margin: '.3rem',
	},
	plusradius: {
		borderRadius:'.5rem .5rem 0 0',
	},
	minusbtn : {
		position: 'absolute',
		top: '6.2rem',
		left: '.32rem',
		
		background: ' red',
		borderRadius:'.5rem',
		padding: ' 0rem',
		minWidth: '2rem',
	},
	minus: {
		background:'red',
		fontSize: '1.2rem',
		height:'2rem',
		width:'2rem',
		borderRadius:'0 0 .5rem .5rem',

	},
	slide: {
		position:' absolute',
		width: ' 100%',
		height:' 100%',
		background: 'linear-gradient(45deg, #FF6F00 50%, #FF8E53 90%)',
		zIndex:3,
		left: '16.5rem',
		transition: ' all 0.5s ease',
	},

	bouncingball : {
		position:' absolute',
		width: '2rem',
		height: '2rem',
		borderRadius:' 50%' ,
		background: '#1B5E20',
		top: '7rem',
		left:' 4.5rem',
		animation: '$bounce  0.5s',
		animationDirection:'alternate',
		animationTimingFunction: 'cubic-bezier(.5,0.05,1,1.3)',
  		animationIterationCount: 'infinite',
  		
	},
	
	'@keyframes bounce' : {
  '0%' : { transform: ' translate3d(0, 0, 0)'     },
  '100% ' :  { transform: 'translate3d(4rem, 0, 0)' }
},
slideshow: {
	left: '0rem',
}

	
}));



export const SingleImage = (data) => {
	const classes = useStyles();
	const [truce, setTruce] = useState(true)
	const dispatch = useDispatch();
	   
	const showDbtn = data.count>0;

	useEffect(()=> {
		
		const timer = setTimeout(()=> {
				setTruce(false);
		},500);
		return () => clearTimeout(timer);
	},[]);
	
	

	return (<>
		<Grid container classes={{root: classes.grid}}>
			<Card classes={{root: classes.firstcontainer}}>
			<Grid container className={clsx(classes.slide,{[classes.slideshow]: truce})}>
			<div className={classes.bouncingball}> 
			</div>
			</Grid>
			<div className={classes.datacountcontainer}>
			<div className={ classes.datacount}> 69 </div>
			
			</div>
			<IconButton classes={{root: classes.deliconbutton}}>
			<MdDelete/>
			</IconButton>
			<IconButton classes={{root: classes.moreiconbutton}}>
			  <MoreVertIcon />
			</IconButton>
			<Icon classes={{root: classes.opencartcontainer}}>
			<RiShoppingCartLine/>
			</Icon>
			<Button classes= {{root: classes.plusbtn}}>
			<AddIcon classes={{root: classes.plusbtnsub}}/>
			</Button>
			<Button classes={{root: classes.minusbtn}}>
			<FiMinus className={classes.minus}/>
			</Button>
			<CardMedia image={`${data.pic}`} classes={{root: classes.cardmedia}} />

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







