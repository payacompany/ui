import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});
router.afterEach(() => {});

router.beforeEach((to, from, next) => {});
export default router;
