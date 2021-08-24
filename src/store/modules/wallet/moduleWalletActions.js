import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	async getMyWalletInformation({ commit }) {
		await axios.get("/peatio/account/balances").then(balances => {
			console.log("balances", balances);
			let coins = [];
			axios.get("/peatio/public/currencies").then(currencies => {
				console.log("currencies", currencies);
				balances.data.forEach((balance, index) => {
					currencies.data.forEach(currence => {
						if (balance.currency === currence.id) {
							let coin = Object.assign({}, balance, currence);
							if (index === 0) {
								coin.isActive = true;
								commit("SET_ACTIVE", coin);
							} else {
								coin.isActive = false;
							}
							coins.push(coin);
						}
					});
				});
			});
			commit("SET_WALLET_CRYPTOLIST", coins);
		});
	},
	getTransactions({ commit }) {
		axios.get("/peatio/market/trades").then(res => {
			commit("SET_TRANSACTIONS", res.data);
		});
	},
	generateDepositAddress({ commit }, payload) {
		const address = axios.get(`/peatio/account/deposit_address/${payload}`);
		return address;
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
};
