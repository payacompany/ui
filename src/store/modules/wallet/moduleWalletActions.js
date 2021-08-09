import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	async getMyWalletInformation({ commit }) {
		await axios.get("/peatio/account/balances").then(balances => {
			console.log("balances", balances);
			let coins = [];
			axios.get("/peatio/public/currencies").then(currencies => {
				console.log("currencies", currencies);
				balances.data.forEach(balance => {
					currencies.data.forEach(currence => {
						if (balance.currency === currence.id) {
							let coin = Object.assign({}, balance, currence);
							console.log(coins);
							coins.push(coin);
						}
					});
				});
			});
			commit("SET_WALLET_CRYPTOLIST", coins);
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
