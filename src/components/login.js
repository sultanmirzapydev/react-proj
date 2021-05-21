import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inputUsername, inputPassword, getToken} from '../redux/ducks/users';
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from "react-router-dom";
import {Alert} from './alert';


export const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory()
	console.log(history);


	const changeUsername = (e) => {
		const usernameData = {[e.target.name] : e.target.value}
		dispatch(inputUsername(usernameData));
	}
	const changePassword = (e) => {
		const changePassword = {[e.target.name] : e.target.value} 
		dispatch(inputPassword(changePassword))
	}
	const handleSubmit = () => {
		dispatch(getToken());
		history.push('/');
	}
	
	return (
		<>
		<div className='loginroot'>
		<Alert/>
		<div className='logincontainer'>
		<input name='username' onChange = {changeUsername} />
		<input name='password' onChange = {changePassword} />
		<button type='submit' onClick= {handleSubmit} > click me </button>
		</div>
		</div>
		</>
		);
};