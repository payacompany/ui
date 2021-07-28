// import axios from "@/axios.js";
export default {
	async login({ commit }, payload) {
		axios.post(`/barong/identity/sessions`, payload);
	},
};
