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
		path: "/profile/confimPhone",
		name: "confimPhone",
		meta: {
			requiresAuth: true,
		},
		component: () => import("../views/dashboard/profile/confimPhone/index.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
