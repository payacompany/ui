import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

import "./assets/styles/css/index.css";

import "./assets/scss/app.scss";

import { ValidationProvider } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);

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

Vue.config.productionTip = false;

new Vue({
	router,
	// eslint-disable-next-line prettier-vue/prettier
	render: h => h(App),
}).$mount("#app");
