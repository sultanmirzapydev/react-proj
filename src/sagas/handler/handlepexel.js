import {call, put,all, select} from 'redux-saga/effects';
import {getPexel, gePexel2} from '../../axios/request/getpexel';
import {setPexel, error} from '../../redux/ducks/pexel';

const data = state => state.pexel.searchText

export function* handlePexel(action) {
	try{
		const searchText = yield select(data);

		const response = yield call(getPexel, searchText);
		
		const random = () => {
			return Math.floor((Math.random() * 964)+483);
		};
		const pics = response.photos.map((item) => 
				{return {id:item.id,count:0, total_views: random(),is_liked: false,

					photographer_url: item.photographer_url,
				 name:item.photographer.slice(0,8),pic:item.src['medium']}});
		
		yield put(setPexel(pics));

		//const test = response.photos.map((item) => {return {id: item.id, picurl : item.photographer_url}});
		//const trio = yield all (test.map(item=> {return call(gePexel2,item)}));
		//console.log(trio);

	} catch(e) {
		console.log(e.message);
		yield put(error(e.message));
	}
}