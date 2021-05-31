import { createClient } from 'pexels';
 import axios from 'axios';
 import axiosinstance from '../axios';


export const getPexel = (searchText,a) => {
	console.log(searchText,a)
	let apiKey = '563492ad6f91700001000001b8165a380d154f0da468b9310070d883';
	let client = createClient(apiKey);
	let query  = searchText
 	return  client.photos.search({query, per_page:20})
	// .then(photos =>  {return photos;})
	.catch((error)=>{
		console.log(error.message);
	})
};


export const getPexelPeople = (data) => {
	let apiKey = '563492ad6f91700001000001b8165a380d154f0da468b9310070d883';
	let client = createClient(apiKey);
	let query = 'person'
	return client.photos.search({query, per_page: 20})
	.then(photos=> photos)
	.catch((error) => {
	console.log(error.message);
})
};



// export const gePexel2 = (item ) => {
// 	console.log(item);
// 	return axiosinstance.post('getpro/', {
// 		picId : item,
// 		//picUrl : item.picurl,
// 	})
// 	.then((response) => {
// 		console.log(response);
// 		return response;
// 	})
// }