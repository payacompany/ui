export default {
  SET_USER_PROFILE(state, payload) {
    state.user = payload;
  },
  SET_BANK_CARDS(state, payload) {
    state.cards = payload;
  },
};
