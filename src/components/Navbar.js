import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getImage} from '../redux/ducks/images';


export const Images = () => {
	const dispatch = useDispatch()
	useEffect(() =>{
		dispatch(getImage())
	},[dispatch]);
	return (
		<>
		<p> sldfhfsgjk </p>

		</>
		)
};

///export default Images;