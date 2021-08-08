import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getBalances({ commit }) {
		axios.get("/peatio/account/balances").then(res => {
			commit("SET_WALLET_BALANCES", res.data);
		});
	},
};
