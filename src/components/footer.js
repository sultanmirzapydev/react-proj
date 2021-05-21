import React from 'react';
import {Link, useLocation} from 'react-router-dom'; 


export const Footer = () => {
	const location = useLocation();
	const test =  location.pathname
	return (
		<>
		<div className='footercontainer'>
		<a style={{display:'flex',position:'absolute', fontSize: '1.5em', top:'-.04em', marginTop:'.5em',
		left:'22em'
	}}> &#169; <div style={{ marginLeft:'1em'}}> 2021 </div>  </a>
	<div className='aboutfooter'><Link to="/about" className={`link ${test==='/about'?'reuseroute':null}`}>About</Link> </div>

		</div>
		</>
		)
}