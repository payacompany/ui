import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	async getMyWalletInformation({ commit }) {
		await axios.get("/peatio/account/balances").then(balances => {
			console.log("balances", balances);
			const coins = [];
			axios.get("/peatio/public/currencies").then(currencies => {
				console.log("currencies", currencies);
				balances.forEach(balance => {
					currencies.forEach(currence => {
						if (balance.currency === currence.id) {
							coins = Object.assign({}, balance, currence);
							console.log(coins);
						}
					});
				});
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
