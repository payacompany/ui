import axios from "@/axios.js";
export default {
  async getMyOrders({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      axios
        .get(`/Portfolio/GetOpenPortfolios`, payload)
        .then((res) => {
          commit("SET_MY_PORTFOES", res.data);
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  confirmWithdraw({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Wallet/ConfrimRequestWithdraw/${payload}`)
        .then((res) => {
          if (res.status == 400) {
            // this._vm.$toast.error(err.data.message);
          }
          resolve(res);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  requestWidthraw({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/Wallet/RequestWithdraw`, payload)
        .then((res) => {
          if (res.status == 400) {
            // this._vm.$toast.error(err.data.message);
          }
          resolve(res);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  submitDeposit({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/Wallet/SubmitDeposite", payload)
        .then((res) => {
          if (res.status == 200) {
            // this._vm.$toast.success("واریز با موفقیت انجام شد");
          }
          resolve(res);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async getWallet({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      axios
        .get("/Wallet/GetWallet", payload)
        .then((res) => {
          commit("SET_WALLET_BALANCE", res.data);
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  getUSDTAddress({ state }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/Public/GetUSDTAdress")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  getTransactions({ state }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/Wallet/GetWalletFull")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
};
