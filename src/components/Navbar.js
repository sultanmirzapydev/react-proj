import React from 'react';
import { AiFillGithub } from "react-icons/ai";


export const Navbar = () => {
	return (
		<>
		<nav className='nav-root'>
		navbar
		<p className='name'> SULTAN <span className='name-span'> </span> MIRZA </p>
		<a href='https://github.com/sultanmirzapydev' className='github-icon'> 
		<  AiFillGithub className='g-icon'> </AiFillGithub> </a>
		<div className='nav-user'>
		<a 
		href='https://stackoverflow.com/questions/33999861/how-to-combine-multiple-css-into-one' 
		className= 'nav-sign-up' >
		sign up </a>
		<a className='nav-log-in'> log in </a>
		</div>
		</nav>
		</>
		)
}