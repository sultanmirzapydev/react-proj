import {call, select} from 'redux-saga/effects';
import {GetToken} from '../../axios/request/gettoken';

export const getData = state => state.login;


export function* handleLogin(action) {
	console.log(getData)
	console.log('action', action);
	try {
		const tokenData = yield select(getData);
		const response = yield call(GetToken, tokenData);
		console.log(response);
	} catch(e) {
		console.log(e.message);
	}
};