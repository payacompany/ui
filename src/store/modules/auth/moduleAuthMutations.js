export default {
	AUTH_REQUEST(state) {
		state.status = "loading";
	},
	AUTH_SUCCESS(state, user) {
		state.status = "success";
		console.log(user);
		state.user = user;
	},
	AUTH_ERROR(state) {
		state.status = "error";
	},
	LOGOUT(state) {
		state.status = "";
		state.token = "";
	},
};
