import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPexel, inputForSearch} from '../redux/ducks/pexel';
import {SingleImage} from './singleimage';
import { FcSearch } from "react-icons/fc";


export const Images = () => {
	const pics = useSelector(state => state.pexel.images);
console.log(pics.map((item) => {return item.count}));



	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getPexel())
	},[dispatch])

	const handleInput = (e) => {
		const searchText = e.target.value;
		console.log(searchText)
		dispatch(inputForSearch(searchText))
	};
	const handleClick = () => {
		dispatch(getPexel())
	};

	return (
		<>
		<div className='imagecontainer'>
		<div className='searchcontainer'>
		<input className='search-input' type='text' onChange = {handleInput}/> 
		<button  className='search-btn' type='submit' onClick = {handleClick}>
		<FcSearch className='fasearch'> </FcSearch>
		</button>
		</div>
		
		<div className='img-container-sub-2'>
		{ pics.map((singlePic, index) => {
			return <SingleImage  key={index} {...singlePic} />
		})
		}
		
		</div>
		
		</div>
		</>
		)
};
