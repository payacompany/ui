import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "dashboard",
		meta: {
			requiresAuth: true,
		},
		component: () => import("../views/dashboard/index.vue"),
	},
	{
		path: "/profile/confim-phone",
		name: "confimPhone",
		meta: {
			requiresAuth: true,
		},
		component: () => import("../views/dashboard/profile/confimPhone/index.vue"),
	},
	{
		path: "/profile/user-identify",
		name: "userIdentify",
		meta: {
			requiresAuth: true,
		},
		component: () =>
			import("../views/dashboard/profile/userIdentify/index.vue"),
	},
	{
		path: "/profile/user-bank-accounts",
		name: "userBankAccounts",
		meta: {
			requiresAuth: true,
		},
		component: () =>
			import("../views/dashboard/profile/bankAccounts/index.vue"),
	},
	{
		path: "/profile/residence-info",
		name: "residenceInfo",
		meta: {
			requiresAuth: true,
		},
		component: () =>
			import("../views/dashboard/profile/residenceInfo/index.vue"),
	},
	{
		path: "/security/2fa",
		name: "2fa",
		meta: {
			requiresAuth: true,
		},
		component: () => import("../views/security/2fa.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
