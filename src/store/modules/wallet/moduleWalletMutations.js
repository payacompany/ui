export default {
  SET_MY_PORTFOES(state, payload) {
    state.myPortfo = payload;
  },
  SET_WALLET_BALANCE(state, payload) {
    state.balance = {
      totalBalance: payload.accessibleBalance + payload.lockedBalance,
      accessibleBalance: payload.accessibleBalance,
      lockedBalance: payload.lockedBalance,
      withdrawingBalance: payload.withdrawingBalance,
      refereesGain: payload.refereesGain,
    };
  },
};
