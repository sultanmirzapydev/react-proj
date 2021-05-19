import React, {useState, useEffect} from 'react';
import { GrView } from "react-icons/gr";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { RiShoppingCartLine } from "react-icons/ri";
import {setLiked,getIncre,getTotal, getDecre} from '../redux/ducks/pexel';
import {useDispatch, useSelector} from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



export const SingleImage = (data) => {
	const dispatch = useDispatch();
	    //const a = useSelector(state => {state.pexel.images.map((item) =>{console.log(item.count);return item.count})});
		// console.log(a);
		//const isInputValid = useSelector(state => state.pexel.isInputValid)
	const showDbtn = data.count>0;

	const toggleLiked = data.is_liked;
	console.log('wtf')
	useEffect (() => {
		console.log('data count changed',data.id);
		let itemId = data.id;
		dispatch(getTotal(itemId))
	},[data.count])

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


	return (<>
		<div className='card'>
		<div style={{position:'absolute'}}>
			<div style={{position:'absolute', top:'.2em', left:'.5em',fontSize:'1.6em',
			fontFamily:"'Teko', sans-serif", fontWeight:'200',color:'#FFA500',  
			transform: 'scaleX(1.5)'}}> 
			{data.count}</div>
			
			<span><RiShoppingCartLine color='#FF8C00'
			style={{position:'absolute',marginTop:'.19em', top:'1.1em',left:'.23em', 
			fontSize: '1.5em',  }}> 
			</RiShoppingCartLine> </span>
			<div><ButtonGroup>
			<Button  onClick={handleWishlist} height="25%"
			style={{top:'4.5em', left:'.2em', width:'.2em',  height: '2.3em', backgroundColor:'#33cc33',
			border:'none',
			borderRadius:'.5em  ' }}>
			 <AddIcon height="25%"> </AddIcon> </Button>


			{showDbtn && <Button size="small" onClick={handleDecre} className='removebtn'
			style={{ top: '7em', left:'-2.8em', 
			height:'2em',width: '.6em', overflow:'hidden', backgroundColor:'#ff751a',
			border:'none',
			borderRadius:'0 0 .5em .5em' }}>
			<RemoveIcon height='25%'> </RemoveIcon>
			  </Button>}
			</ButtonGroup> </div>
			 </div>


		<img className='card-img' src={`${data.pic}`}/>
		<div className='img-details-container'>
	<div className='photographer'>
		
		<div className='pic-view'>
	<FontAwesomeIcon icon={faEye} className='faeye' />
		 <div className='total-views'>{data.total_views} </div>
		</div>
		
	</div>

	<div className='count-container'>
	<div className='count-btn'>
	<pre className='photographer-name'>
	 by, {data.name} 
	</pre>
	
	</div>
	</div>

	<div className='show-liked'>
	<div className='like-icon'>
	<FormControlLabel
        control={<Checkbox checked={toggleLiked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
        onChange={handleChange} />}
      />

	</div>
	</div>
	<div className='photographer-name-container'>	
	<Button style={{ width: '100%', margin:'0', padding: '0'}}>
	<div className='add-to-wishlist' onClick = {handleWishlist}>
	<pre>Add to wishlist</pre>
	</div>
	</Button>
	
	</div>
	</div>
		
	</div>
	 </>)
};







