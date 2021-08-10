export default {
	SET_WALLET_CRYPTOLIST(state, payload) {
		state.coins = payload;
	},
	SET_TRANSACTIONS(state, payload) {
		state.transactions = payload;
	},
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
