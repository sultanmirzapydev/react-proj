import React from 'react';
import {Link, useLocation} from 'react-router-dom'; 


export const Footer = () => {
	const location = useLocation();
	const test =  location.pathname
	return (
		<>
		<div className='footercontainer'>
		<div  className='footercopyright'>
		<a className='copyright'> &#169;  2021  </a>
	<div className='aboutfooter'><Link to="/about" className={`link ${test==='/about'?'reuseroute':null}`}>About</Link> </div>
	</div>
		</div>
		</>
		)
}