import React from 'react';
import { BiError } from "react-icons/bi";


export const Notfound = () => {
	return (<>
		<div className='notfoundcontainer'>
		<div style={{ position:'absolute', top:'.4em', left:'.6em',paddingLeft:'10em',
		
		fontSize:'4.5em'
	}}> 
		<BiError style={{ color: '#F32013'}}> </BiError> </div>
		
		<pre className='notftext'> PAGE    NOT    FOUND </pre>
		</div>
	 </>);
}