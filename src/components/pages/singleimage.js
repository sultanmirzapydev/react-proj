import React, {memo,useState, useEffect} from 'react';
import {getIncre,getTotal, getDecre,getRemove,showLike,removeRecoverAlert} from '../../redux/ducks/pexel';
import {useDispatch, useSelector} from 'react-redux';
import {showAlert, removeAlert} from '../../redux/ducks/alertd';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import { GoVerified } from "react-icons/go";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { MdDelete } from "react-icons/md";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { RiShoppingCartLine } from "react-icons/ri";
import AddIcon from '@material-ui/icons/Add';
import { FiMinus } from "react-icons/fi";
import clsx from 'clsx';
import Popup from 'reactjs-popup';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from '../material-ui/cardcustom';
import {Link } from 'react-router-dom';



export const SingleImage = memo(({item}) => {

	
	const classes = useStyles();
	const [liked, setLiked] = useState(false);
	const [truce, setTruce] = useState(true);
	const dispatch = useDispatch();
	   
	

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
	},[dispatch])

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







