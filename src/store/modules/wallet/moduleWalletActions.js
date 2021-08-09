import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	async getMyWalletInformation({ commit }) {
		requestOne = "/peatio/account/balances";
		requestTwo = "/peatio/public/currencies";
		requestThree = "/peatio/account/transactions";
		await axios
			.all([requestOne, requestTwo, requestThree])
			.then(
				axios.spread((...responses) => {
					const responseOne = responses[0];
					const responseTwo = responses[1];
					const responesThree = responses[2];

					console.log([responseOne]);
				})
			)
			.catch(errors => {
				// react on errors.
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
