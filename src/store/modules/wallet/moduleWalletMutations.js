export default {
	SET_WALLET_CRYPTOLIST(state, payload) {
		state.coins = payload;
	},
	// SET_WALLET_BALANCES(state, payload) {
	// 	state.balances = payload;
	// },
	// SET_CURRENCIES(state, payload) {
	// 	state.currencieAllDetails = [];
	// state.balances.forEach((balance, index) => {
	// 	payload.forEach(currence => {
	// 		if (balance.currency === currence.id) {
	// 			if (index == 0) {
	// 				balance[index].isActive = true;
	// 			} else {
	// 				balance[index].isActive = false;
	// 			}
	// 			const coin = Object.assign({}, balance, currence);
	// 			state.currencieAllDetails.push(coin);
	// 		}
	// 	});
	// });
	// 	state.currencies = payload;
	// },
	SET_ACTIVE(state, payload) {
		state.coins.forEach(coin => {
			if (coin.name === payload.name) {
				state.activeCoin = coin;
				coin.isActive = true;
			} else {
				coin.isActive = false;
			}
		});
	},
	// SET_TRANSACTIONS(state, payload) {
	// 	state.transactions = payload;
	// },
};
