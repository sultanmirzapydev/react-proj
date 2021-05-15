import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { createClient } from 'pexels';


export const Images = () => {
	const dispatch = useDispatch()

	const handleInput = (e) => {
		const searchText = e.target.value;
		localStorage.setItem('search_text', searchText)
	}
	const handleClick = () => {
		const apiKey = '563492ad6f91700001000001b8165a380d154f0da468b9310070d883';
		const client = createClient(apiKey);
		const query = 'small hat';
		client.photos.search({query, per_page:18}).then(photos =>{
			console.log(photos);
		})
	}

	return (
		<>
		<input  type='text' onChange = {handleInput}/>
		<button type='submit' onClick = {handleClick}>
		search 
		</button>
		<p> sldfhfsgjk </p>

		</>
		)
};
