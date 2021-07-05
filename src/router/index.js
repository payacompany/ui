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
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
