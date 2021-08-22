import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getVerifyPhoneCode({ commit }, payload) {
		axios.post("/barong/resource/phones/send_code", payload).then(res => {});
	},
};
