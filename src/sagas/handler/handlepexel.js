import {call, put,all, select} from 'redux-saga/effects';
import {getPexel, gePexel2, getPexelPeople} from '../../axios/request/getpexel';
import {setPexel, error, setPeople} from '../../redux/ducks/pexel';

const data = state => state.pexel.searchText

export function* handlePexel(action) {
	try{
		const searchText = yield select(data);
		//console.log(action.payload);

		const response = yield call(getPexel, searchText );
		
		const random = () => {
			return Math.floor((Math.random() * 64)+48);
		};
		const pics = response.photos.map((item) => 
				{return {id:item.id,count:0, total_liked: random(),is_liked: false,

					photographer_url: item.photographer_url,
				 name:item.photographer.slice(0,15),pic:item.src['medium']}});
		
		yield put(setPexel(pics));

		const responsePeople = yield call(getPexelPeople);
		
		const peoplePic = responsePeople.photos.map((item) =>
			{ return {propic : item.src['medium']}});
		yield put(setPeople(peoplePic));


		//const test = response.photos.map((item) => {return {id: item.id, picurl : item.photographer_url}});
		//const trio = yield all (test.map(item=> {return call(gePexel2,item)}));
		//console.log(trio);

	} catch(e) {
		console.log(e.message);
		yield put(error(e.message));
	}
}