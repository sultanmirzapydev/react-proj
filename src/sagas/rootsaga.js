import createRootSaga from 'redux-root-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {handleImages} from './handler/handleimages';
import {GET_IMAGE} from '../redux/ducks/images';

export function* watchImages() {
	
	yield takeLatest(GET_IMAGE,handleImages);



}
