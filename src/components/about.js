import React from 'react';
import {Alert} from './alert';


export const About = () => {
	return (<>
		<div className='aboutroot'>
		<Alert/>
		<div className='aboutmaincontainer'>
		
		<pre className=' about1line'>   About    This     Proj. </pre> 
		<div className='abooutline'> </div>
		<p className='aboutdes'>   I have created this website using these below 
		libraries and framework :  </p>
		<div className='libicons'>    
		</div>
		 </div>
		 </div>
	 </>);
}