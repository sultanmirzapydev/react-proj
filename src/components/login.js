import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inputsData} from '../redux/ducks/users';


export const Login = () => {
	const dispatch = useDispatch();
	const ips = useSelector((state) => state.login);
	console.log('useselector', ips);
	
	const changeData = (e) => {
		const edata = {[e.target.name] : e.target.value}
		dispatch(inputsData(edata));
	}
	return (
		<>
		<input name='username' onChange = {changeData} />
		<input name='password' onChange = {changeData} />
		<button type='submit'  > click me </button>
		</>
		);
};