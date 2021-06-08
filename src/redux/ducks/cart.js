export const SET_CART = 'SET_CART';


export const setCart = (data) => ({
	type:SET_CART,
	payload:data
});


const initialState = {
	items : [],
	
};


const cartReducer = (state=initialState, action) => {
	if (action.type === SET_CART) {
		return {...state, items:action.payload }
	}
	return state;
}
export default cartReducer;