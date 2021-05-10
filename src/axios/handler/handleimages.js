import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import  {getImage} from '../request/getimage';
import {imgFetchFailed, setImage} from '../../redux/ducks/images';


export function* handleImages(action) {
	try{
		const response =  yield call(getImage)
		const images = response.data
		yield put(setImage(images))
		//yield put({type:'SET_IMAGE', images:images})
	} catch(e) {
		const message = e.message
		//yield put({type:'IMAGE_FETCH_FAILED', message: e.message})
		yield put(imgFetchFailed(message));
	}

}