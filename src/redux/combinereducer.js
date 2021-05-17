import {combineReducers} from 'redux';
import loginReducer from './ducks/users';
import pexelReducer from './ducks/pexel';

const allReducer = combineReducers({
	login: loginReducer,
	pexel: pexelReducer,
});

export default allReducer;