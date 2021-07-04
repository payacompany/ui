import axios from "@/axios.js";
export default {
  async getMyOpenPortfo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Portfolio/GetOpenPortfolios`)
        .then((res) => {
          commit("SET_PORTFOLIOS", res.data);
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async closePortfo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Portfolio/ClosePortfolio/${payload.portfolioId}`)
        .then((res) => {
          // this._vm.$toast.success("اتاق معامله مورد نظر شما با موفقیت حذف شد.");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async getAllOrders({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Portfolio/GetAllPortfolios`, payload)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async getChart({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Room/GetRoomChart/${payload}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async getRoomIdDetails({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Room/GetRoomData/${payload}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async getMyRoomOrders({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Room/GetUserRoomData/${payload}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  getStopLess({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Room/GetStopLoss/${payload.portfolioId}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  setStopLess({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/Room/SetLosses/${payload.portfolioId}`, payload)
        .then((res) => {
          this._vm.$toast.success("حد سود یا ضرر با موفقیت ثبت شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  setOrder({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/Room/PlaceOrder/${payload.id}`, payload)
        .then((res) => {
          this._vm.$toast.success("سفارش با موفقیت ثبت شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  closeOrder({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Room/CloseOrder/${payload}`)
        .then((res) => {
          this._vm.$toast.success("سفارش با موفقیت حذف شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
};
