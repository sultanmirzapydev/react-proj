import {combineReducers} from 'redux';
import imageReducer from './ducks/images';
import loginReducer from './ducks/users';

const reducers = combineReducers({
	user : imageReducer,
	login: loginReducer,
});

export default reducers;