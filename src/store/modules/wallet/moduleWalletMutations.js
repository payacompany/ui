export default {
	SET_WALLET_BALANCES(state, payload) {
		state.balances = payload;
	},
	SET_CURRENCIES(state, payload) {
		state.balances.forEach(balance => {
			payload.forEach(currence => {
				if (balance.currency === currence.id) {
					console.log("eq", balance.currency, currence.id);
					const isActive = false;
					const coin = Object.assign({}, balance, currence, isActive);
					state.currencieAllDetails.push(coin);
				}
			});
		});
		state.currencies = payload;
	},
	SET_ACTIVE(state, payload) {
		state.currencieAllDetails.forEach(coin => {
			if (coin.name === payload.name) {
				console.log("eq", coin);
				coin.isActive = true;
			} else {
				console.log("not eq", coin);
				coin.isActive = false;
			}
		});
	},
};
