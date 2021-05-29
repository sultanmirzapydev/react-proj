import { createClient } from 'pexels';
 import axios from 'axios';


export const getPexel = (searchText,a) => {
	console.log(searchText,a)
	const apiKey = '563492ad6f91700001000001b8165a380d154f0da468b9310070d883';
	const client = createClient(apiKey);
	const query  = searchText
 	return  client.photos.search({query, per_page:20})
	// .then(photos =>  {return photos;})
	.catch((error)=>{
		console.log(error.message);
	})
}

