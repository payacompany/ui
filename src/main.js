import Vue from "vue";
import App from "./App.vue";

import "./assets/styles/css/index.css";

import { ValidationProvider } from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);

import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
	// eslint-disable-next-line prettier-vue/prettier
	rtl: true,
});

Vue.config.productionTip = false;

new Vue({
	// eslint-disable-next-line prettier-vue/prettier
	render: h => h(App),
}).$mount("#app");
