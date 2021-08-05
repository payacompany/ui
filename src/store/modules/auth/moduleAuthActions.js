import Vue from "vue";
import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	async login({ commit }, payload) {
		commit("AUTH_REQUEST");
		try {
			await axios.post(`/barong/identity/sessions`, payload).then(res => {
				localStorage.setItem("csrfToken", data.csrf_token);
				commit("AUTH_SUCCESS", data);
			});
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