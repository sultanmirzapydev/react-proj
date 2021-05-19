import React from 'react';
import { AiFillGithub } from "react-icons/ai";


export const Navbar = () => {
	return (
		<>
		<nav className='nav-root'>
		<p className='name'> SULTAN <span className='name-span'> </span> MIRZA </p>
		<a href='https://github.com/sultanmirzapydev' className='github-icon'> 
		<  AiFillGithub className='g-icon'> </AiFillGithub> </a>
		<div> Home       </div>
		<div>  About Us </div>
		<div className='signup'>
		<a 
		href='https://stackoverflow.com/' 
		className= 'nav-sign-up' >
		sign up </a>
		</div>
		<div className='login'>
		<a className='nav-log-in'> log in </a>
		</div>
		
		</nav>
		</>
		)
}