import React from 'react';
import {Images} from './imagecontainer';
import {Login} from './login'; 
import {Logout} from './logout';
import {Navbar} from './navbar';
	
export const RootComponent = () => {
	return (
		<>
		<Navbar/>
		<Images/>
		</>
		)
};


