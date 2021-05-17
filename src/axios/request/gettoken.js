import axiosinstance from '../axios';
import {useSelector} from 'react-redux';



export const GetToken = (tokenData) => {
	console.log('gettoken', tokenData)
	console.log(tokenData['username'])
	
	return axiosinstance.post('token/', {
		username: tokenData['username'],
		password: tokenData['password'],
	})
	.then((res) =>{
		localStorage.setItem('access_token', res.data.access);
		localStorage.setItem('refresh_token', res.data.refresh);
		axiosinstance.defaults.headers.common['Authorization'] = 
		'JWT ' + localStorage.getItem('access_token');
			return ('successful login')
	})
	.catch((error) => {
			console.log(error);
		})
};