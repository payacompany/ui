import axios from "@/axios.js";
export default {
  async getMyProfile({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Users/GetMProfile`)
        .then((res) => {
          commit("SET_USER_PROFILE", res.data);
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async getRefereesData({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`Users/GetRefereesData`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async getNotifications({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Users/GetNotifications`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  seenNotifes({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Users/SeenNotification/notificationId?notificationId=${payload}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  setTlBot({ state }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Users/SetTelegramBot`)
        .then((res) => {
          // this._vm.$toast.success("تغییرات اعمال شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  resetTlBot({ state }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Users/ReSetTelegramBot`)
        .then((res) => {
          // this._vm.$toast.success("تغییرات اعمال شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  setEmail({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Users/ChangeEmailAddress/${payload}`)
        .then((res) => {
          // this._vm.$toast.success("تغییرات اعمال شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  verifyMail({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Users/ConfirmChangeEmailAddress/${payload}`)
        .then((res) => {
          // this._vm.$toast.success("تغییرات اعمال شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  resetPassword({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/Users/ResetPassword`, payload)
        .then((res) => {
          this._vm.$toast.success("رمز با موفقیت تغییر یافت.");
          resolve(res.data);
        })
        .catch((err) => {
          this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  UpdateProfile({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/Users/UpdateProfile`, payload)
        .then((res) => {
          this._vm.$toast.success("تغییرات اعمال شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  addBankCards({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/Users/AddBankAccountData`, payload)
        .then((res) => {
          this._vm.$toast.success("تغییرات اعمال شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  uploadImage({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/Users/UploadImage`, payload)
        .then((res) => {
          this._vm.$toast.success("تغییرات اعمال شد");
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  getCardsBank({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Users/GetBankAccounts`, payload)
        .then((res) => {
          commit("SET_BANK_CARDS", res.data);
          resolve(res.data);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
};
