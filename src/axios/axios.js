///This is for drf   

import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/';

export const axiosinstance = axios.create({
	baseURL : baseURL, 
	timeout : 5000,
	headers : {
		Authorization: localStorage.getItem('token_access') 
		? 'JWT ' + localStorage.getItem('token_access')
		:  null,
		'Content-Type': 'application/json',
		accept : 'application/json',
	},
});

export default axiosinstance;