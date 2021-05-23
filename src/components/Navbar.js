import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AiFillGithub } from "react-icons/ai";
import {showAlert, removeAlert} from '../redux/ducks/alertd';
import {BrowserRouter as Router,Route,Link, useLocation } from 'react-router-dom';


export const Navbar = () => {
	let removeItem = useSelector(state=> state.alert.isRemovedId)
	console.log(removeItem);
	const dispatch = useDispatch();
	const location = useLocation();
	const test =  location.pathname
	console.log(test);


		const handleAlert = (e) => {
		dispatch(showAlert());
		
		}
		useEffect(() => {
			
			let time = setTimeout(() => {
				
				dispatch(removeAlert());
			},6000)
			return () => clearTimeout(time);
		}, [dispatch,handleAlert, removeItem])
	
	
	return (
		<>
		<nav  className='navroot'>
		<p className='name '> SULTAN MIRZA </p>
		<a  href='https://github.com/sultanmirzapydev' className='github'>                                                  
		<  AiFillGithub style={{ background:'black', borderRadius:'50%'}}> </AiFillGithub> </a>

		<div className='home' ><Link to='/' 
		className={`link ${test==='/'?'reuseroute':null}`} onClick={handleAlert}>Home</Link> </div>
		<div className='about'><Link to="/about" 
		className={`link ${test==='/about'?'reuseroute':null}`} onClick={handleAlert}>About</Link> </div>
		
		<div className='navusercontainer'>
		<div className='login' > <Link to='/login' 
		className={`link ${test==='/login'?'reuseroute':null}`} onClick={handleAlert}> log in </Link> </div>
		<div className='register'> <Link to='/register' 
		className={`link ${test==='/register'?'reuseroute':null}`} onClick={handleAlert}> Register </Link> </div>
		</div>
		</nav>
		</>
		)
}