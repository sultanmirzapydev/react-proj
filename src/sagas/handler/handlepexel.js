import {call, put, select} from 'redux-saga/effects';
import {getPexel} from '../../axios/request/getpexel';
import {setPexel} from '../../redux/ducks/pexel';

const data = state => state.pexel.searchText

export function* handlePexel(action) {
	try{
		const searchText = yield select(data);
		console.log('loading')
		const response = yield call(getPexel, searchText);
		console.log('handlePexel', response);
		const random = () => {
			return Math.floor((Math.random() * 964)+483);
		}
		const pics = response.photos.map((item) => 
				{return {count:23, total_views: random(),is_liked: false,
					photographer_url: item.photographer_url,
				 name:item.photographer.slice(0,12),pic:item.src['medium']}});
		console.log(pics);
		yield put(setPexel(pics));
		//yield put(setPexel({response}));

	} catch(e) {
		console.log(e.message);
	}
}