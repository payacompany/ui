export default {
	SET_ALL_ORDERS(state, payload) {
		console.log({ payload });
		state.allOrders = payload;
	},
	SET_OPEN_ORDERS(state, payload) {
		state.openOrders = payload;
	},
	SET_COMPLETED_ORDERS(state, payload) {
		state.completedOrders = payload;
	},
};
