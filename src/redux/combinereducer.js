import {combineReducers} from 'redux';
import userReducer from './ducks/images';

const reducers = combineReducers({
	user : userReducer
});

export default reducers;