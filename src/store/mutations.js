export default {
	SET_MY_PROFILE(state, payload) {
		console.log(payload);
		state.myProfile = payload;
	},
	SET_ACTIVITY(state, payload) {
		state.userActivity = payload;
	},
};
