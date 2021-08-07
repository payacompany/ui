import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getAllTransactionHistories({ commit }, payload) {
		let URL1 = "/peatio/account/deposits";
		let URL2 = "/peatio/account/withdraws";

		const promise1 = axios.get(URL1);
		const promise2 = axios.get(URL2);

		Promise.all([promise1, promise2]).then(res => {
			console.log("res", res[0].data, res[1].data);
			const records = [];
			records = [...res[0].data, ...res[1].data];
			commit("SET_ALL_RECORDS", records);
		});
	},
	getDepositsHistory({ commit }, payload) {
		axios.get("/peatio/account/deposits").then(res => {
			commit("SET_ALL_RECORDS", res.data);
		});
	},
	getWithdrawHistory({ commit }, payload) {
		axios.get("/peatio/account/withdraws").then(res => {
			commit("SET_ALL_RECORDS", res.data);
		});
	},
};
