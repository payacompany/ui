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
	changePassword({ commit }, payload) {
		try {
			axios.put(`/barong/resource/users/password`, payload);
		} catch (error) {}
	},
	async generate2fa({ commit }, payload) {
		try {
			const res = await axios.post(`/barong/resource/otp/generate_qrcode`);
			return res;
		} catch (error) {}
	},
	enable2fa({ commit }, payload) {
		try {
			const res = axios.post(`/barong/resource/otp/enable`, payload);
			return res;
		} catch (error) {}
	},
};
