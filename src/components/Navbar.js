import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import {BrowserRouter as Router,Route,Link, useLocation } from 'react-router-dom';


export const Navbar = () => {
	const location = useLocation();
	const test =  location.pathname
	console.log(test);
	return (
		<>
		<nav  className='navroot'>
		<p className='name '> SULTAN MIRZA </p>
		<a  href='https://github.com/sultanmirzapydev' className='github'>                                                  
		<  AiFillGithub style={{ background:'black', borderRadius:'50%'}}> </AiFillGithub> </a>

		<div className='home' ><Link to='/' className={`link ${test==='/'?'reuseroute':null}`}>Home</Link> </div>
		<div className='about'><Link to="/about" className={`link ${test==='/about'?'reuseroute':null}`}>About</Link> </div>
		
		<div className='login' > <Link to='/login' className={`link ${test==='/login'?'reuseroute':null}`}> log in </Link> </div>
		<div className='register'> <Link to='/register' className={`link ${test==='/register'?'reuseroute':null}`}> Register </Link> </div>
		</nav>
		</>
		)
}