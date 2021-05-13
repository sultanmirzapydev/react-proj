import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import  {getImage} from '../../axios/request/getimage';
import {getSearchImages} from '../../axios/request/getsearchimg';
import {imgFetchFailed, setImage} from '../../redux/ducks/images';


export function* handleImages(action) {
	try{
		const response =  yield call(getImage)
		const images = response
		console.log( images[0].title)
		yield put(setImage(images))
		//yield put({type:'SET_IMAGE', images:images})
	} catch(e) {
		const message = e.message
		//yield put({type:'IMAGE_FETCH_FAILED', message: e.message})
		yield put(imgFetchFailed(message));
	}
};

export function* handleSearchImages(action) {
	try {
		const response = yield call(getSearchImages);
		yield put(setImage(response))
		localStorage.removeItem('search_text')

	} catch(e) {
		yield put(imgFetchFailed(e.message));
	}
}