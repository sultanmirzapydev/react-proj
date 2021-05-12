import axiosinstance from '../axios';

export const getToken = (data) => {
	return axiosinstance.post('token/', {
		username : data.username,
		password : data.password,
	})
	.then((response) =>{
		localStorage.setItem('access_token', response.data.access);
		localStorage.setItem('refresh_token', response.data.refresh);
		axiosinstance.default.headers['Authorization'] 
		= 'JWT ' + localStorage.getItem('access_token');
		console.log(response)
	})
}