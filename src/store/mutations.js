export default {
	SET_MY_PROFILE(state, payload) {
		state.myProfile = payload;
	},
	SET_ACTIVITY(state, payload) {
		state.userActivity = payload;
	},
	TOGGLE_SIDEBAR(state) {
		state.isOpen = !state.isOpen;
	},
};
