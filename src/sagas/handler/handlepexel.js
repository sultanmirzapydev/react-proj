import {call, put, select} from 'redux-saga/effects';
import {getPexel} from '../../axios/request/getpexel';
import {setPexel} from '../../redux/ducks/pexel';

const data = state => state.pexel.searchText

export function* handlePexel(action) {
	try{
		const searchText = yield select(data);
		console.log('getting pexel');
		const response = yield call(getPexel, searchText);
		console.log('got the pexel');
		
		const random = () => {
			return Math.floor((Math.random() * 964)+483);
		};
		const pics = response.photos.map((item) => 
				{return {id:item.id,count:0, total_views: random(),is_liked: false,

					photographer_url: item.photographer_url,
				 name:item.photographer.slice(0,8),pic:item.src['medium']}});
		
		yield put(setPexel(pics));
		console.log('after render')

	} catch(e) {
		console.log(e.message);
	}
}