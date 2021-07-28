// import axios from "@/axios.js";
export default {
	async login({ commit }, payload) {
		commit("AUTH_REQUEST");
		try {
			const { data } = await axios.post(`/barong/identity/sessions`, payload);
			window.axios.defaults.headers.common["X-CSRF-TOKEN"] = data.csrf_token;
			commit("AUTH_SUCCESS", data);
		} catch {
			commit("AUTH_ERROR");
		}
	},
};
