export default {
	SET_WALLET_BALANCES(state, payload) {
		state.balances = payload;
	},
	SET_CURRENCIES(state, payload) {
		state.currencieAllDetails = [];
		state.balances.forEach(balance => {
			payload.forEach(currence => {
				if (balance.currency === currence.id) {
					const coin = Object.assign({}, balance, currence);
					state.currencieAllDetails.push(coin);
				}
			});
		});
		state.currencies = payload;
	},
	SET_ACTIVE(state, payload) {
		state.currencieAllDetails.forEach(coin => {
			if (coin.name === payload.name) {
				state.activeCoin = coin;
				coin.isActive = true;
			} else {
				coin.isActive = false;
			}
		});
	},
	SET_TRANSACTIONS(state, payload) {
		state.transactions = payload;
	},
};
