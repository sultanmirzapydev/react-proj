import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getImage, getSearchImage} from '../redux/ducks/images';


export const Images = () => {
	const dispatch = useDispatch()
	useEffect(() =>{
		dispatch(getImage())},
		[dispatch]);
	const handleInput = (e) => {
		const searchText = e.target.value;
		localStorage.setItem('search_text', searchText)
	}

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(getSearchImage());

	}

	return (
		<>
		<input  type='text' onChange = {handleInput}/>
		<button type='submit' onClick = {handleClick} >
		search 
		</button>
		<p> sldfhfsgjk </p>

		</>
		)
};
