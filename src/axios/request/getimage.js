import axios from 'axios';
import axiosinstance from '../axios';

export const getImage = () => {
return axiosinstance.get('/album')
		.then((response) => {
			console.log('res', response.data);
			return response.data
			
			

			
		})
		.catch((error) => {
			console.log(error);
		})
	}

export default getImage;


// export function requestGetUser() {
//   return axios.request({
//     method: "get",
//     url: "'http://127.0.0.1:8000/api/album"
//   });
// }
