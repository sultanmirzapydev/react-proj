import {combineReducers} from 'redux';
import loginReducer from './ducks/users';
import pexelReducer from './ducks/pexel';
import alertReducer from './ducks/alertd';

const allReducer = combineReducers({
	login: loginReducer,
	pexel: pexelReducer,
	alert: alertReducer,
});

export default allReducer;