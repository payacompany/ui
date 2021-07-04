import axios from "@/axios.js";
export default {
  async registerUser({ state }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post("/Account/Register", payload.user, {
          headers: {
            captcha: payload.token,
          },
        })
        .then((res) => {
          // this._vm.$toast.success(
          // `${payload.userName} عزیز ثبت نام شما با موفقیت انجام شد.`
          // );
          resolve(res);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  async login({ commit }, payload) {
    return await new Promise((resolve, reject) => {
      commit("AUTH_REQUEST");
      axios
        .post(`/Account/Login`, payload.user, {
          headers: {
            captcha: payload.token,
          },
        })
        .then((res) => {
          if (res.data.confirmationRequired) {
            this._vm.$toast.success(`دو عاملی`);
            const token = res.data.token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["X-API-TOKEN"] = token;
            resolve(res);
          } else {
            // this._vm.$toast.success(`به پنل لاناگلد خوش آمدید.`);
            const token = res.data.token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["X-API-TOKEN"] = token;
            commit("AUTH_SUCCESS", token);
            resolve(res);
          }
        })
        .catch((err) => {
          commit("AUTH_ERROR");
          localStorage.removeItem("token");
          // this._vm.$toast.error(err.response.message);
          reject(err);
        });
    });
  },
  resendVerificationCode({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Verification/ResendVerificationCode`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  verifyLogin({ commit }, payload) {
    commit("AUTH_REQUEST");
    return new Promise((resolve, reject) => {
      commit("AUTH_REQUEST");
      axios
        .get(`/Account/ConfirmLogin/${payload}`)
        .then((res) => {
          const token = localStorage.getItem("token");
          localStorage.setItem("token", token);
          axios.defaults.headers.common["X-API-TOKEN"] = token;
          commit("AUTH_SUCCESS", token);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  forgetPassword({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/Account/ForgotPassword/${payload}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          // this._vm.$toast.error(err.response.data.message);
          reject(err);
        });
    });
  },
  confirmForgetPassword({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/Account/ForgotPasswordConfirm`, payload)
        .then((res) => {
          this._vm.$toast.success(`پسورد با موفقیت به روز رسانی شد`);
          resolve(res);
        })
        .catch((err) => {
          this._vm.$toast.error("لطفا کد احراز را به درستی وارد نمایید");
          reject(err);
        });
    });
  },
  async logout({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem("token");
      localStorage.removeItem("rooms");
      localStorage.removeItem("nikName");
      commit("LOGOUT");
      axios.defaults.headers.common["X-API-TOKEN"] = null;
      // this._vm.$toast.success(`تا دیداری دیگر بدرود.`);
      resolve();
    });
  },
};
