import {call, put,all, select} from 'redux-saga/effects';
import {getPexel,  getPexelPeople} from '../../axios/request/getpexel';
import {setPexel, error, setPeople} from '../../redux/ducks/pexel';
import data from '../../components/utils/data';
import price from '../../components/utils/pricedata';
import {getTotal} from '../../redux/ducks/pexel';


const searchdata = state => state.pexel.searchText

export function* handlePexel(action) {
	try{
		const searchText = yield select(searchdata);
		

		const response = yield call(getPexel, searchText );
		
		const random = () => {
			return Math.floor((Math.random() * 64)+30);
		};
		const offer = () => {
			return Math.floor((Math.random()*20) + 30);
		}
		const pics = response.photos.map((item,i) => 
				{return {id:item.id,count:0, total_liked: random(),is_liked: false, offers: offer(),pname:data[i], p:price[i],

					photographer_url: item.photographer_url,
				 name:item.photographer.slice(0,15),pic:item.src['medium'],}});
		//let pics = picss.map((item, i)=> Object.assign({}, item, data[i], price[i]))
		
		
		yield put(setPexel(pics));	
		yield put(getTotal());

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