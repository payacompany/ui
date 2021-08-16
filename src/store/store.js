import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import auth from "./modules/auth/moduleAuth.js";
import history from "./modules/history/moduleHistory.js";
import orders from "./modules/orders/moduleOrders.js";
import wallet from "./modules/wallet/moduleWallet.js";
import market from "./modules/market/moduleMarket.js";

Vue.use(Vuex);

export default new Vuex.Store({
	getters,
	mutations,
	state,
	actions,
	modules: {
		auth,
		history,
		orders,
		wallet,
		market,
	},
	strict: process.env.NODE_ENV !== "production",
});
