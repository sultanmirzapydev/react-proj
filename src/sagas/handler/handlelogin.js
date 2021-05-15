import {call, put, select} from 'redux-saga/effects';
import {GetToken} from '../../axios/request/gettoken';

export const getData = state => state.login;

export function* handleLogin(action) {
	console.log('action', action)
	try {
		const cart = yield select(getData);
		console.log('cart',cart)
		const response = yield call(GetToken(cart));
		console.log(response);
	} catch(e) {
		console.log(e.message);
	}
};