import state from "./moduleHistoryState.js";
import mutations from "./moduleHistoryMutations.js";
import actions from "./moduleHistoryActions.js";
import getters from "./moduleHistoryGetters.js";

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
