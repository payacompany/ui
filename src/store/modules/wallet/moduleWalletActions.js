import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getMyWalletInformation({ commit }) {
		const requestOne = axios.get("/peatio/account/balances");
		const requestTwo = axios.get("/peatio/public/currencies");
		const requestThree = axios.get("/peatio/account/transactions");
		axios
			.all([requestOne, requestTwo, requestThree])
			.then(res => {
				console.log("response", res);
			})
			.catch(errors => {
				// react on errors.
				console.error(errors);
			});
	},
	// async getBalances({ commit }) {
	// 	await axios.get("/peatio/account/balances").then(res => {
	// 		commit("SET_WALLET_BALANCES", res.data);
	// 	});
	// },
	// async getCurrencies({ commit }) {
	// 	await axios.get("/peatio/public/currencies").then(res => {
	// 		commit("SET_CURRENCIES", res.data);
	// 	});
	// },
	// getTransactions({ commit }) {
	// 	axios.get("/peatio/account/transactions").then(res => {
	// 		commit("SET_TRANSACTIONS", res.data);
	// 	});
	// },
};
