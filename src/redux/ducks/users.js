const INPUT_DAT = "INPUT_DAT";

export const inputsData = (data) => ({
	type: INPUT_DAT,
	payload: data 
});


const initialstate = {
	username : '',
	password : 0
};
const loginReducer = (state=initialstate, action) => {
	if  (action.type === INPUT_DAT) {
		console.log('loginReducer', action.payload['username'], action.payload['password']);
		return {...state,username:action.payload['username'], password: action.payload['password']};
	}
	return state;
};

export default loginReducer;