import React from 'react';
import { VscLoading } from "react-icons/vsc";

export const Loading = () => {

	return (<> 
		<div className='loadingroot'>
		<div className='loadingcontainer'>
		<div >
		<VscLoading className='loadingicon'> </VscLoading>
		</div>
		<div className='loadingtext'>
		Loading..................
		</div>
		<div className='loadingsubtext'>
		<pre> getting    data    from    REST    API </pre>
		</div>
		</div>
		</div>
		</>)
}