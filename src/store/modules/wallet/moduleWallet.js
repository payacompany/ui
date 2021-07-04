import state from './moduleWalletState.js'
import mutations from './moduleWalletMutations.js'
import actions from './moduleWalletActions'
import getters from './moduleWalletGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
