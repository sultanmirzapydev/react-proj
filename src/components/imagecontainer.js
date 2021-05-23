import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPexel, inputForSearch} from '../redux/ducks/pexel';
import {SingleImage} from './singleimage';
import { FcSearch } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import { StylesProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Loading} from './loading';
import {Alert} from './alert';




export const Home = () => {
	const pics = useSelector(state => state.pexel);
	const isLoading = pics.isLoading

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getPexel())
	},[dispatch])

	const handleInput = (e) => {
		const searchText = e.target.value;
		dispatch(inputForSearch(searchText))
	};
	
	const handleClick = () => {
		if(pics.isInputValid) {
		dispatch(getPexel())
	}
	};

	return (
		<>
		{isLoading ?<Loading/> :
		<div className='imagecontainer'>
		<Alert/>
		<div className='searchcontainer'>
		<input className='search-input' type='text' placeholder='E.g., Nature' onChange = {handleInput}/> 

		<button  className='search-btn'  type='submit' onClick = {handleClick}>
		<FcSearch className='fasearch'> </FcSearch>
		
		</button>
		<div > 
			 total-{pics.totalCart}</div>
		<div className='big-basket'><FiShoppingCart className='main-big-basket'> </FiShoppingCart></div>

		</div>
		
		<div className='img-container-sub-2'>
		{ pics.images.map((singlePic, index) => {
			return <SingleImage  key={index} {...singlePic} />
		})
		}

		</div>
		
		</div> 
	}
		</>
		)
};
