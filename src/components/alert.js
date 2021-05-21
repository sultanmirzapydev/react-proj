import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {removeAlert, showAlert} from '../redux/ducks/alertd';


export const Alert = () => {
	const alertData = useSelector(state=> state.alert);
	
	const dispatch = useDispatch();
	const location = useLocation();
	const whichLocation =  location.pathname
	const currentLocation = whichLocation.substring(1);
	const isHome = whichLocation === '/';

	useEffect (() => {
	const timeout =	setTimeout(() => {
		console.log('fsldjk')
			dispatch(removeAlert());
		},5000)
		return () => clearTimeout(timeout)
		
	},[dispatch, alertData.supprotingEle]);



	return (<>
		
		<div className ={`alertroot ${ alertData.showAlert  ? 'alertfadein' : 'alertfadeout' }`}>

		{isHome? 'welcome to home' :`welcome to ${currentLocation}`}
		</div> 
	 </>);
}