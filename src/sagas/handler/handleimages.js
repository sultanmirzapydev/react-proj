////   ######   IMPORTANT FOR DANGO REST FRAMEWORK    ######



// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import  {getImage} from '../../axios/request/getimage';
// import {getSearchImages} from '../../axios/request/getsearchimg';
// import {imgFetchFailed, setImage} from '../../redux/ducks/images';


// export function* handleImages(action) {

// 	try{
// 		console.log(action);
// 		const response =  yield call(getImage)

// 		//console.log( images[0].title)
// 		yield put(setImage(response))
// 		//yield put({type:'SET_IMAGE', images:images})
// 	} catch(e) {
// 		const message = e.message
// 		//yield put({type:'IMAGE_FETCH_FAILED', message: e.message})
// 		yield put(imgFetchFailed(message));
// 	}
// };

// //   ####    IF I WANT TO USE THEN THIS BELOW CODE IS USEFUL FOR DANGO REST FRAMEWORK    #####


// // export function* handleSearchImages(action) {
// // 	try {
// // 		const response = yield call(getSearchImages);
// // 		const data = 
// // 		yield put(setImage(response.photos[0].src.original))
// // 		localStorage.removeItem('search_text')

// // 	} catch(e) {
// // 		yield put(imgFetchFailed(e.message));
// // 	}
// // }