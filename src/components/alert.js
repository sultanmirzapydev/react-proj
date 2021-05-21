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
	console.log(isHome)
	console.log(currentLocation)

	useEffect (() => {
		setTimeout(() => {
			dispatch(removeAlert());
		},5000);
		
	},[dispatch, ]);
	


	return (<>
		{ currentLocation || isHome ?
		<div className ={`alertroot ${ alertData.showAlert || currentLocation || isHome ? 'alertfadein' : 'alertfadeout' }`}>

		{isHome? 'welcome to home' :`welcome to ${currentLocation}`}
		</div> : null }
	 </>);
}