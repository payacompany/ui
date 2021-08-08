export default {
	SET_WALLET_BALANCES(state, payload) {
		state.balances = payload;
	},
	SET_CURRENCIES(state, payload) {
		state.balances.forEach(balance => {
			payload.forEach(currence => {
				if (balance.currency === currence.id) {
					console.log("eq", balance.currency, currence.id);
					const coin = Object.assign({}, balance, currence);
					state.currencieAllDetails.push(coin);
				}
			});
		});
		state.currencies = payload;
	},
};
