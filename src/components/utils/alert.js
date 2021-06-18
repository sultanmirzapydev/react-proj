import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {removeAlert, showAlert} from '../../redux/ducks/alertd';
import {recoverItem,removeRecoverItem} from '../../redux/ducks/pexel';
import { makeStyles, } from '@material-ui/core/styles';
import {getTotal } from '../../redux/ducks/pexel';
import clsx from 'clsx';

const useStyles = makeStyles((theme)=> ({
	
	alertroot: {
		position:'absolute',
		top:'7rem',
		background:'#F0F4C3',
		padding:'.6rem .6rem',
		zIndex: 3,
		fontWeight:'500', 
		left:'1rem',
		border:'.3rem solid #F57C00 ',
		borderRadius: '.3rem',
	},
	showSlido: {

		animation: `$slide 1s ease`,
	
	},

'@keyframes slide' : {
    '0%' :{ left: '-14rem' },
    '100%' : {left: '1rem'}
},
	 hideSlido: {
		animation:`$hide 1s forwards`,
	 },
'@keyframes hide ': {
	'0%' : {
		left: '1rem'
	},
	'100%': {
		left:'-14rem',
	}
}
}))


export const Alert = () => {
	const classes = useStyles();
	const alertData = useSelector(state=> state.alert);
	const checkremoveditem = useSelector(state=> state.pexel.isRemoved);
	const isRcovered = useSelector(state=> state.pexel.isRcovered);
	
	const dispatch = useDispatch();
	const location = useLocation();
	const whichLocation =  location.pathname
	const currentLocation = whichLocation.substring(1);
	const isHome = whichLocation === '/';

	


	const handlebacktolife = (e) => {
		
		dispatch(recoverItem());
		dispatch(getTotal());
	}

	useEffect(()=>{
		dispatch(removeRecoverItem());
	},[whichLocation,dispatch])

	useEffect(()=> {
		const timer = setTimeout(() => {
			dispatch(removeRecoverItem());
		},4000)
		return ()=> clearTimeout(timer)
	},[dispatch])

	
	useEffect(()=> {
		dispatch(showAlert());
		let timer = setTimeout(() => {
			dispatch(removeAlert());
		},4000)
		return ()=> clearTimeout(timer)
	},[checkremoveditem,dispatch])

	return (<>
			{ checkremoveditem || isRcovered  ? <div className={clsx([classes.alertroot] ,
				{[classes.showSlido]: alertData.showAlert,
				[classes.hideSlido]:!alertData.showAlert,}) }> { isRcovered ? <div>item added to the list </div> : <div>
			Item removed, <span style={{color:'green',cursor:'pointer'}} onClick={handlebacktolife} > undo </span> </div>}</div> :

			<div className={
				clsx([classes.alertroot],{[classes.showSlido]: alertData.showAlert,
					[classes.hideSlido]: !alertData.showAlert
				})
			}>
			{ isHome ? 'Welcome to Home' : `welcome to ${currentLocation}` }</div> }
			
			
		 </>
		)


}