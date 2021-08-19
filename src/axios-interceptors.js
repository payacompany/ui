import axios from "./axios.js";
import router from "./router";
import Vue from "vue";

axios.interceptors.request.use(
	config => {
		const token = localStorage.getItem("token");
		// if (token) {
		// config.headers.common["X-API-TOKEN"] = token;
		// }
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
axios.interceptors.response.use(
	response => {
		if (response.status === 200 || response.status === 201) {
			// Vue.$toast.success(`${response.status}\n${response.statusText}`);
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	error => {
		console.log("error intercept", error.response);
		if (error.response.status) {
			switch (error.response.status) {
				case 400:
					Vue.$toast.error(`${error.response.data.message}`);
					break;

				case 401:
					Vue.$toast.error(`نشست شما منقضی شده`);
					router.push("/auth/login");
					break;
				case 403:
					router.replace({
						path: "/login",
						query: { redirect: router.currentRoute.fullPath },
					});
					break;
				case 404:
					Vue.$toast.error(`${error.response.data.message}`);
					break;
				case 502:
					setTimeout(() => {
						router.replace({
							path: "/login",
							query: {
								redirect: router.currentRoute.fullPath,
							},
						});
					}, 1000);
			}
			return Promise.reject(error.response);
		}
	}
);
