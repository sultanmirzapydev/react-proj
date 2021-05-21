export const SHOW_ALERT = 'SHOW_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export const showAlert = (data) => ({
	type: SHOW_ALERT,
	payload: data
});
export const removeAlert = (data) => ({
	type: REMOVE_ALERT, 
	payload: data
});

const initialState = {
	showAlert : true
}

const alertReducer = (state=initialState, action) => {
	console.log(action.type)
	if (action.type === REMOVE_ALERT) {
		console.log(action.type);
		return {showAlert: false}
	}
	if (action.type === SHOW_ALERT) {
		console.log(action.type);
		return {showAlert:true}
	}
	return state
};

export default alertReducer;