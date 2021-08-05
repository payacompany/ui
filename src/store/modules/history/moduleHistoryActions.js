import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getAllTransactionHistories({ commit }, payload) {
		let URL1 = "/peatio/account/deposits";
		let URL2 = "/peatio/account/withdraws";

		const promise1 = axios.get(URL1);
		const promise2 = axios.get(URL2);

		Promise.all([promise1, promise2]).then(function (values) {
			console.log(values);
		});
	},
};
