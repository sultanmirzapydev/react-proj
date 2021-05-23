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
	showAlert : true,
	isRemovedId : 0

}

const alertReducer = (state=initialState, action) => {
	if (action.type === REMOVE_ALERT) {
		return {...state,showAlert: false}
	}
	if (action.type === SHOW_ALERT) {

		return {...state,showAlert:true, isRemovedId: action.payload}
	}
	return state
};

export default alertReducer;