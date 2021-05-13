import React from 'react';
import {Images} from './images';
import {Login} from './login'; 
import {Logout} from './logout';



export const RootComponent = () => {
	return (
		<>
		<Images/>
		<Login/>
		<Logout/>
		</>
		)
};

//export default RootComponent;
