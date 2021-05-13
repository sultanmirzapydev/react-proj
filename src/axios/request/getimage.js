import axios from 'axios';
import axiosinstance from '../axios';

export const getImage = () => {
return axiosinstance.get('/album')
		.then((response) => {
			return response.data			
		})
		.catch((error) => {
			console.log(error);
		})
	}

export default getImage;

