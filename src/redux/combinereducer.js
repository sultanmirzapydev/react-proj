import {combineReducers} from 'redux';
import imageReducer from './ducks/images';

const reducers = combineReducers({
	user : imageReducer
});

export default reducers;