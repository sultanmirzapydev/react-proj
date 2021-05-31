import React from 'react';
import {Alert} from '../utils/alert';
import { useHistory } from "react-router-dom";


export const About = () => {
	const history = useHistory();
  const path    = history.location.pathname;
  //console.log(path);
	return (<>
		<div className='aboutroot'>
		<Alert/>
		<div className='aboutmaincontainer'>
		
		<pre className=' about1line'>   About    This     Project </pre> 
		<div className='abooutline'> </div>
		<p className='aboutdes'>   I have created this website using these below 
		libraries and frameworks :  </p>
		<div className='libicons'>
		</div>
		 </div>
		 </div>
	 </>);
}