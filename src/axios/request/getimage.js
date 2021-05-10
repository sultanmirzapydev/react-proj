import axios from 'axios';
import axiosinstance from '../axios';

export const getImage = () => {
axiosinstance.get('/album')
		.then((response) => {
			console.log(response);
			return response;
		})
		.catch((error) => {
			console.log(error);
		})
	}

//export default getImage;