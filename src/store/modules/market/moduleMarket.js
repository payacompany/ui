import state from "./moduleMarketState.js";
import mutations from "./moduleMarketMutations.js";
import actions from "./moduleMarketActions.js";
import getters from "./moduleMarketGetters.js";

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
