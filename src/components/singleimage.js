import React from 'react';
import { GrView } from "react-icons/gr";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { RiShoppingBasketLine } from "react-icons/ri";

export const SingleImage = (data) => {
	console.log(data,data.name )
	
	return (<>
		<div className='card'>
		{
			data.count>0 && <div style={{position:'absolute'}}>
			<div style={{position:'absolute', top:'.3em', left:'.4em',fontSize:'1.5em',
			fontFamily:"'Teko', sans-serif", fontWeight:'400'}}> 
			{data.count}</div>
			<span><RiShoppingBasketLine 
			style={{position:'absolute', marginTop:'.1em', top:'1.5em',left:'.38em', 
			fontSize: '1.2em',  }}> 
			</RiShoppingBasketLine> </span>
			 </div>
		}
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
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
      />
	</div>
	</div>
	<div className='photographer-name-container'>
	<div className='add-to-wishlist'>
	Add to wishlist
	</div>
	</div>
	</div>
		
	</div>
	 </>)
};







