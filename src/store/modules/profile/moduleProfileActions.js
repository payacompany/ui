import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getVerifyPhoneCode({ commit }, payload) {
		axios.post("/barong/resource/phones/send_code", payload).then(res => {});
	},
	verifyPhone({ commit }, payload) {
		axios.post("/barong/resource/phones/verify", payload).then(res => {});
	},
	getVerifyEmailCode({ commit }, payload) {
		let formData = new FormData();
		formData.append("email", payload);
		axios
			.post("/barong/identity/users/email/generate_code", formData)
			.then(res => {});
	},
};
