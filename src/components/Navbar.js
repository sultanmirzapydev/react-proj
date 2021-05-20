import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import {BrowserRouter as Router,Route,Link,} from 'react-router-dom'


export const Navbar = () => {
	return (
		<>
		<div className='navglass'>
		<nav  className='navroot'>
		<p className='name'> SULTAN MIRZA </p>
		<a  href='https://github.com/sultanmirzapydev' className='github'>                                                  
		<  AiFillGithub style={{ background:'black', borderRadius:'50%'}}> </AiFillGithub> </a>
		<div className='home'><Link to='/'>Home</Link> </div>
		<div className='about'><Link to="/about">About</Link> </div>
		<div className='login' > <Link to='/login'> log in </Link> </div>
		<div className='register'> <Link to='/register'> Register </Link> </div>
		</nav>
		</div>
		</>
		)
}