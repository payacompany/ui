import state from "./moduleWalletState.js";
import mutations from "./moduleWalletMutations.js";
import actions from "./moduleWalletActions.js";
import getters from "./moduleWalletGetters.js";

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
