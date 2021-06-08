import React, {useState, useEffect} from 'react';
import {setLiked,getIncre,getTotal, getDecre,getRemove,showLike,clearRemovedItem,removeRecoverAlert} from '../../redux/ducks/pexel';
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
import Popover from '@material-ui/core/Popover';
import Popup from 'reactjs-popup';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from '../material-ui/cardcustom';
import {BrowserRouter as Router,Route,Link, useLocation } from 'react-router-dom';



// const useStyles = makeStyles((theme) => ({
// 	flexgrow: {
//     flexGrow: 1,
//     [theme.breakpoints.down(420)] : {
//       flexGrow: .4,
//     },
// },
// 	firstcontainer: {
		
// 		position: 'relative',
// 		marginBottom: '3rem',
// 		borderRadius: '.9rem',
// 		margin: '0 auto',
// 		width: '16rem',
// 		transition:'all .5s ease',
// 		boxShadow: '2px 2px 20px 6px rgba(0, 0, 0, 0.2)',
// 		[theme.breakpoints.down(600)] : {
// 			marginBottom: '1rem',
// 		},
// 		'&:hover': {
// 			//transform: 'scale(1.01)',
// 			boxShadow: '6px 5px 20px 4px rgba(0, 0, 0, 0.2)',

// 		}

// 	},
// 	grid : {
// 		width: '16rem',
// 		margin: '0 auto',
// 		gap: '.3rem',
// 	},
// 	cardmedia: {
// 		height: '14rem',
// 		width: 'auto',
		
		
// 	},
// 	getPexelPeople : {

// 	},
// 	toolbar : {
		
// 		//justifyContent: 'center',
// 	},

// 	toolbarregular : {
// 		minHeight: '3.5rem ',
// 		borderRadius: '0 0 2rem 2rem',

// 	},
// 	gutters : {
// 		padding: '0rem',
		
// 		[theme.breakpoints.down(600)] : {
// 			padding: '0rem ',
// 		}
// 	},
// 	avatar: {
// 		marginRight: '3% ',
// 		width: '30px', 
// 		height: '30px',
// 		marginLeft: '3%',
// 	},
// 	name: {
// 		fontSize: '.8rem ',
// 		marginLeft: '2%',
// 	},
// 	totalviews : {
// 		marginRight: '2%',
// 		fontSize: '.8rem',
// 	},
// 	formcontrol: {
// 		marginRight: '1% ',
// 		'& span': {
			
// 		}
// 	},
// 	verified: {
// 		color: '#0288D1',
// 		marginLeft: '2%',
// 	},
// 	moreiconbutton: {
// 		position: 'absolute',
// 		left: '13rem',
// 		color: '#E65100',
// 	},
// 	deliconbutton: {
// 		position: 'absolute',
// 		left: '11rem ',

// 		color: '#263238', 
// 	},
	
	
// 	datacountcontainer : {

// 		left: '.5rem',
// 		top: '.8rem', 
// 		margin: '0 auto',
// 		position: 'absolute',
// 		padding:'.1rem .3rem .1rem .3rem',
// 		width:' auto',
// 		background:'#E65100',
		
// 		borderRadius: '.5rem',
		
// 	},
// 	datacount : {
	
// 		color: 'white',
// 		//marginLeft:'.4rem',
// 		fontWeight: '600',
// 		fontSize: '1.1rem',
// 	},
// 	opencartcontainer : {
// 		position: 'absolute',
// 		top: '2.3rem',
// 		left: '.5rem',
// 		color:'#FF6F00',
// 	},
// 	plusbtn : {
// 		position: 'absolute',
// 		top:'4.9rem',
// 		left: '.5rem',

// 		minWidth: '1rem',
// 		border:'.6rem ',
// 		padding: ' 0rem' ,
		
		
// 	},
// 	plusbtnsub : {
// 		fontSize: '1.2rem',
// 		background: 'green',
// 		color:'white',
// 		width: '2rem' ,
// 		height: ' 2rem',
// 		padding:' 0rem' ,
// 		borderRadius: '.5rem',
		
// 	},
// 	plusbtnborder : {
// 		borderRadius : '.5rem .5rem 0 0',
// 	},
// 	plusradius: {
// 		borderRadius:'.5rem .5rem 0 0',
// 	},
// 	minusbtn : {
// 		position: 'absolute',
// 		top: '6.8rem',
// 		left: '.51rem',
		
// 		background: '#EF5350',
// 		borderRadius:'.5rem',
// 		padding: ' 0rem',
// 		minWidth: '2rem',
// 	},
// 	minus: {
// 		background:'#FF8F00',
// 		color:'white',
// 		fontSize: '1.2rem',
// 		height:'2rem',
// 		width:'2rem',
// 		borderRadius:'0 0 .5rem .5rem',

// 	},
// 	slide: {
// 		position:' absolute',
// 		width: ' 100%',
// 		height:' 100%',
// 		background: 'linear-gradient(45deg, #FF6F00 50%, #FF8E53 90%)',
// 		zIndex:3,
// 		//left: '16.5rem',
// 		transition: ' all 0.5s ease',
// 	},

// 	bouncingball : {
// 		position:' absolute',
// 		width: '1.3rem',
// 		height: '1.3rem',
// 		borderRadius:' 50%' ,
// 		background: '#1B5E20',
// 		top: '7rem',
// 		left:' 4.5rem',
// 		animation: '$bounce  0.5s',
// 		animationDirection:'alternate',
// 		animationTimingFunction: 'cubic-bezier(.5,0.05,1,1.3)',
//   		animationIterationCount: 'infinite',
  		
// 	},
	
// 	'@keyframes bounce' : {
//   '0%' : { transform: ' translate3d(0, 0, 0)'     },
//   '100% ' :  { transform: 'translate3d(4rem, 0, 0)' }
// },
// slideshow: {
// 	left: '0rem',
// },
// hideslido : {
// 	left: '16.5rem',
// },
// menu : {
// 	background:'#BDBDBD',
// 	position:'relative',
// 	top: '1.8rem',
// 	right: '2.5rem',
// 	borderRadius:'.5rem',
// },
// menuItem: {
	
// 	textAlign:'center',
// 	marginBottom:'.2rem',
// 	fontSize:'.8rem',
// 	//padding: '.3rem 1.5rem .3rem 1.5rem',
// 	cursor: 'pointer',
// 	//borderBottom:'.1rem solid black',
// 	margin:'0 auto',
// 	padding:'.5rem 0 .5rem 0',
// 	width: '8rem',
// 	borderRadius:'.5rem',
// 	'&:hover' :{
// 		background:'#4CAF50',
// 	},
	
// },
// tooltip : {
// 	backgroundColor: '#f5f5f9',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 220,
//     fontSize: theme.typography.pxToRem(12),
//     border: '1px solid #dadde9',
// },
// arrow:{
// 	color: 'white',
// }


	
// }));

// const myPopupArrow = {
// 		color:' red',
// 		background:'red',
// 	};


export const SingleImage = (item) => {
	const classes = useStyles();
	const [liked, setLiked] = useState(false);
	const [truce, setTruce] = useState(true);
	const dispatch = useDispatch();
	   
	const showDbtn = item.count>0;

	const handleDelete = (event) => {
		 event.preventDefault();
		
		dispatch(getRemove(item.id));
		dispatch(showAlert(item.id));
		dispatch(getTotal());
		dispatch(removeRecoverAlert());

	};
	const handleDecre = (event) => {
		 event.preventDefault();
		 dispatch(getDecre(item.id))
		 dispatch(getTotal());
	};
	const handleIncre = (event) => {
		 event.preventDefault();
		 dispatch(getIncre(item.id))
		 dispatch(getTotal());
	};
	const handleLike = (event) => {

		setLiked(!liked);
		
		let id = item.id;
		let data = {liked, id }
		
		dispatch(showLike(data))
	};
	
	useEffect(() => {
		const time = setTimeout(()=> {
			dispatch(removeAlert());
		},4000);
		return () => clearTimeout(time);
	},[handleDelete])

	useEffect(()=> {
		
		const timer = setTimeout(()=> {
				setTruce(false);
		},1000);
		return () => clearTimeout(timer);
	},[]);
	
	

	return (<>
		<Grid container classes={{root: classes.grid}}>
			<Card classes={{root: classes.firstcontainer}}>
			<Grid container className={clsx(classes.slide,{[classes.slideshow]: truce, [classes.hideslido]: !truce})}>
			<div className={classes.bouncingball}> 
			</div>
			</Grid>
			<div className={classes.datacountcontainer}>
			<div className={ classes.datacount}> {item.count} </div>
			
			</div>
			
			<Tooltip arrow title='Remove' classes={{tooltip: classes.tooltip, arrow: classes.arrow}}>
			<IconButton classes={{root: classes.deliconbutton}} onClick={handleDelete}>
			<MdDelete/>
			</IconButton> 
			</Tooltip>
				
			
			
    		<Popup 
				trigger={ 
					<IconButton classes={{root: classes.moreiconbutton}} >
			  <MoreVertIcon  />
			</IconButton>    }
			position='center center'
			on = 'click'
			closeOnDocumentClick
     		
     		 contentStyle={{ padding: '0px', border: 'none', }}
     		 arrow={false}
			 >
		  <div className={classes.menu}>
       		 <div className={classes.menuItem} onClick={handleIncre}>Buy</div>
       		 <div className={clsx(classes.menuItem,{[classes.like]:true})}  onClick={handleLike}
       		 > {liked?'unlike': 'Like'}</div>
       		 <Link to='/cart'>
        	<div className={classes.menuItem}> view cart</div> </Link>
      	 </div>
  			</Popup>
  			
			
			<Icon classes={{root: classes.opencartcontainer}}>
			<RiShoppingCartLine/>
			</Icon>
			<Tooltip arrow title='Add ' placement='right-end' classes={{tooltip: classes.tooltip, arrow: classes.arrow}}>
			<Button classes= {{root: classes.plusbtn}} onClick={handleIncre}>
			<AddIcon className={clsx(classes.plusbtnsub,{[classes.plusbtnborder]: item.count>0})}/>
			</Button>
			
			</Tooltip>
			
			<Tooltip arrow title='remove' placement='right-end' classes={{tooltip: classes.tooltip, arrow: classes.arrow}}>
			<Button classes={{root: classes.minusbtn}}   onClick={handleDecre}  >
			<FiMinus className={classes.minus} />
			</Button>
			</Tooltip>
			<div className={classes.puppies}> {item.puppies} </div>
			<div className={classes.price} > $ {item.price} </div>
			<Button className={classes.showmore}> view more </Button>
			<CardMedia image={`${item.pic}`} classes={{root: classes.cardmedia}} />

			<Toolbar classes={{root: classes.toolbar, gutters: classes.gutters,regular: classes.toolbarregular, }}>
			
			
			<Avatar src={`${item.propic}`} classes= {{ root: classes.avatar}} />
			 <div className={classes.name}> by , <span> {item.name}  </span> </div>
			 
			 <GoVerified className= { classes.verified}> </GoVerified>
			 <div className={classes.flexgrow}/>
			 
			 <FormControlLabel checked={liked} classes={{root: classes.formcontrol}} onChange={handleLike}
			control={<Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/> } /> 
			<div className={classes.totalviews}> {item.total_liked} </div>
			 </Toolbar>
			 
			</Card>
		</Grid>
	 </>)
};







