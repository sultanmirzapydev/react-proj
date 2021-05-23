import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {removeAlert, showAlert} from '../redux/ducks/alertd';
import {recoverItem} from '../redux/ducks/pexel';


export const Alert = () => {
	const alertData = useSelector(state=> state.alert);
	const dispatch = useDispatch();
	const location = useLocation();
	const whichLocation =  location.pathname
	const currentLocation = whichLocation.substring(1);
	const isHome = whichLocation === '/';
	const removedId = alertData.isRemovedId;

	const handleRemoveId = (e) => {
		dispatch(recoverItem(removedId));
	}


	// useEffect (() => {
	// const timeout =	setTimeout(() => {
	// 		console.log('dispatched from alert')

	// 		dispatch(removeAlert());
	// 	},5000)
	// 	return () => clearTimeout(timeout)
	// 	},[handleRemoveId])



	if (alertData.isRemovedId > 0) {
		return <div className ={`alertroot ${ alertData.showAlert  ? 'alertfadein' : 'alertfadeout' }`}>
		item removed, <a className='undo' style={{fontSize:'1.2em'}} onClick={handleRemoveId}> undo </a>
		</div> 
	}
	else{ 
		return <div className ={`alertroot ${ alertData.showAlert  ? 'alertfadein' : 'alertfadeout' }`}>
		
		{isHome? 'welcome to home' :`welcome to ${currentLocation}`} 
		</div> 
	}
}