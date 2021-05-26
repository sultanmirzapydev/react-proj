// import createRootSaga from 'redux-root-saga';
import {takeLatest } from 'redux-saga/effects';
import {handleLogin}   from './handlelogin';
import {handlePexel} from './handlepexel';
import {GET_TOKEN} from '../../redux/ducks/users';
import {GET_PEXEL} from '../../redux/ducks/pexel';

//import { handleImages, handleSearchImages } from './handleimages';

//import {GET_IMAGE, GET_SEARCH_IMAGE} from '../../redux/ducks/images';



export function* watchToken() {
	yield takeLatest(GET_TOKEN, handleLogin)
}

export function* watchPexel() {
	yield takeLatest(GET_PEXEL, handlePexel)
}





////  ######   THIS BELOW CODE IS NEEDED FOR DANGO REST FRAMEWORK   #######




// export function* watchImages() {
// 	yield takeLatest(GET_IMAGE,handleImages);
// }

// export function* watchSearchImages() {
// 	yield takeLatest(GET_SEARCH_IMAGE, handleSearchImages)
// }