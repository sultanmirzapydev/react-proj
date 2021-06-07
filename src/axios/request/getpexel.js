import { createClient } from 'pexels';
 
//import axiosinstance from '../axios';


export const getPexel = (searchText) => {
	console.log(searchText)
	let apiKey = '563492ad6f91700001000001b8165a380d154f0da468b9310070d883';
	let client = createClient(apiKey);
	let query  = searchText
 	return  client.photos.search({query, per_page:36})
	// .then(photos =>  {return photos;})
	.catch((error)=>{
		console.log(error.message);
	})
};


export const getPexelPeople = (data) => {
	let apiKey = '563492ad6f91700001000001b8165a380d154f0da468b9310070d883';
	let client = createClient(apiKey);
	let query = 'person'
	return client.photos.search({query, per_page: 36})
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