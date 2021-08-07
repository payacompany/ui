export default {
	SET_ALL_RECORDS(state, payload) {
		console.log(payload);
		state.cryptoHistoryList = payload;
	},
};
