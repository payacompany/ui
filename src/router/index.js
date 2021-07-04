/* eslint-disable prettier-vue/prettier */
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
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
router.afterEach(() => {});

router.beforeEach((to, from, next) => {});
export default router;
