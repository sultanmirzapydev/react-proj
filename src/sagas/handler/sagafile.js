import createRootSaga from 'redux-root-saga';
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { handleImages, handleSearchImages } from './handleimages';
import {handleLogin}   from './handlelogin';
import {GET_IMAGE, GET_SEARCH_IMAGE} from '../../redux/ducks/images';
import {GET_TOKEN} from '../../redux/ducks/users';


export function* watchImages() {
	yield takeLatest(GET_IMAGE,handleImages);
}

export function* watchToken() {
	yield takeLatest(GET_TOKEN, handleLogin)
}
export function* watchSearchImages() {
	yield takeLatest(GET_SEARCH_IMAGE, handleSearchImages)
}