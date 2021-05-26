import React, {useState, useEffect} from 'react';
import { GrView } from "react-icons/gr";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { RiShoppingCartLine } from "react-icons/ri";
import {setLiked,getIncre,getTotal, getDecre,getRemove} from '../redux/ducks/pexel';
import {useDispatch, useSelector} from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {BrowserRouter as Router,Route,Link,useHistory } from 'react-router-dom'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {showAlert, removeAlert} from '../redux/ducks/alertd';




export const SingleImage = (data) => {
	const history = useHistory();
	const dispatch = useDispatch();
	    //const a = useSelector(state => {state.pexel.images.map((item) =>{console.log(item.count);return item.count})});
		// console.log(a);
		//const isInputValid = useSelector(state => state.pexel.isInputValid)
	const showDbtn = data.count>0;

	const toggleLiked = data.is_liked;
	useEffect (() => {
		
		dispatch(getTotal(data.id))
	},[data.count,data.id,dispatch])

	const handleChange = (e) => {
		let qs2 = data.id;
		let qs = e.target.checked;
		let qs3 = {qs,qs2}
		dispatch(setLiked(qs3));
	}
	const handleWishlist = (e) => {
		let itemid = data.id;
		dispatch(getIncre(itemid));
	}
	const handleDecre = (e) => {
		dispatch(getDecre(data.id));
	}
	
	const handleremove = (e) => {
		dispatch(getRemove(data.id));
		dispatch(showAlert(data.id));
	}
	useEffect(() => {
			
			let time = setTimeout(() => {
				
				dispatch(removeAlert());
			},5000)
			return () => clearTimeout(time);
		}, [dispatch,])
	

	

	return (<>
		<div className='card'>
			<div className='cardcountandremove'>
			<div className='count'> 
			{data.count}</div>

			
			<div className='removecirdiv'><IoIosRemoveCircleOutline className='removecir' onClick={handleremove}> </IoIosRemoveCircleOutline></div> 
			</div>
			<div className='cartplusminus'>
			<span > <RiShoppingCartLine color='#FF8C00' className='cardcart'> </RiShoppingCartLine> </span>
			
			<div ><ButtonGroup className=''>
			<Button size='small' onClick={handleWishlist} className='addbtn' style={{border:'.2em solid orange'}}  > 
			<AddIcon > </AddIcon> </Button>
			

			{showDbtn && <Button size="small" onClick={handleDecre} className='decrebtn' style={{border:'.2em solid orange'}}>
			<RemoveIcon > </RemoveIcon></Button>}

			</ButtonGroup> </div> 
			 </div>


		<img className='card-img' alt='failed' src={`${data.pic}`}/>
		<div className='img-details-container'>
	<div className='photographer'>
		
		<div className='pic-view'>
		<div className='faeye'>
	<FontAwesomeIcon icon={faEye} className='faeye' />
	</div>
		 <div className='total-views'>{data.total_views} </div>
		</div>
		
	</div>

	<div className='count-container'>
	
	<p className='photographer-name'>
	 by, {data.name} 
	</p>
	
	
	</div>

	<div className='show-liked'>
	<div className='like-icon'>
	<FormControlLabel
        control={<Checkbox checked={toggleLiked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
        onChange={handleChange} className='	mobicon' />}
      />

	</div>
	</div>
	<div className='addtowishlistcontainer'>	
	<a href='me.co' className='onlyforsmwishlist'> Add to wishlist </a>
	<div className='disableonsmallscreen'>
	<Button >
	<div className='add-to-wishlist' onClick = {handleWishlist}>
	<pre>Add to Wishlist</pre>
	</div>
	</Button>
	</div>
	
	</div>
	</div>
		
	</div>
	 </>)
};







