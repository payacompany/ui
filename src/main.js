import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/store.js";
import i18n from "./i18n/index.js";
import "./assets/styles/css/index.css";

import "./assets/scss/app.scss";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
Vue.use(Toast, {
	position: "bottom-right",
	rtl: true,
	timeout: 1533,
	transition: "Vue-Toastification__fade",
	maxToasts: 20,
	newestOnTop: true,
	// registration props here
});

import { extend } from "vee-validate";
import {
	required,
	email,
	integer,
	between,
	min,
	confirmed,
} from "vee-validate/dist/rules";
extend("required", required);
extend("email", email);
extend("integer", integer);
extend("between", between);
extend("confirmed", confirmed);
extend("min", min);
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";

Vue.use(Vuesax, {
	// eslint-disable-next-line prettier-vue/prettier
	rtl: true,
});

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

//import layouts in here
import Default from "./layouts/default.vue";
import Error from "./layouts/error.vue";
import Trade from "./layouts/trade.vue";
import Xs from "./layouts/xs.vue";

Vue.component("default-layout", Default);
Vue.component("error", Error);
Vue.component("trade", Trade);
Vue.component("xs", Xs);

import VueSocketIO from "vue-socket.io";
Vue.use(
	new VueSocketIO({
		debug: true,
		secure: true,
		connection: "ws://dax.autovm.ir/api/v2/ranger/private/",
		vuex: {
			store,
			actionPrefix: "SOCKET_",
			mutationPrefix: "SOCKET_",
		},
	})
);

import axios from "./axios.js";
Vue.prototype.$http = axios;
window.axios = axios;

import VueCookies from "vue-cookies";
Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
	router,
	i18n,
	store,
	// eslint-disable-next-line prettier-vue/prettier
	render: h => h(App),
}).$mount("#app");
