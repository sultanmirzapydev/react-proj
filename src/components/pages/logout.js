import React from 'react';
import axiosinstance from '../../axios/axios';

export const Logout = () => {

	const handleClick = () => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
		axiosinstance.defaults.headers.common['Authorization'] = null;
	}
	return (<>
		<button type='submit' onClick = {handleClick} >
		logout 
		</button>
		</>)
}