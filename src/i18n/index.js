import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./locales/en/index.js";
import fa from "./locales/fa/index.js";
Vue.use(VueI18n);

const i18n = new VueI18n({
	lazy: true,
	locale: localStorage.getItem("local") || "Fa",
	messages: {
		En: en,
		Fa: fa,
	},
	//silentTranslationWarn: process.env.NODE_ENV === 'development'
});

export default i18n;
