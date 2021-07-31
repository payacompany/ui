// import axios from "@/axios.js";
export default {
	async login({ commit }, payload) {
		commit("AUTH_REQUEST");
		try {
			const { data } = await axios.post(`/barong/identity/sessions`, payload);
			localStorage.setItem("token_csrf", data.csrf_token);
			axios.defaults.headers.common["X-CSRF-TOKEN"] = data.csrf_token;
			commit("AUTH_SUCCESS", data);
		} catch {
			commit("AUTH_ERROR");
		}
	},
	forgetpassword({ commit }, payload) {
		try {
			axios.post(`/barong/identity/users/password/generate_code`, payload);
		} catch {}
	},
};
