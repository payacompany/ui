import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	async getMyWalletInformation({ commit }) {
		await axios.get("/peatio/account/balances").then(res => {
			console.log("balances", res);
			axios.get("/peatio/public/currencies").then(res => {
				console.log("currencies", res);
			});
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
