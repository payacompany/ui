import state from './modulePortfolioState.js'
import mutations from './modulePortfolioMutations'
import actions from './modulePortfolioActions'
import getters from './modulePortfolioGetters'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
