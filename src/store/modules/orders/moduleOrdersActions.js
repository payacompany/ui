import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getAllOrders({ commit }) {
		axios.get("/peatio/market/orders").then(res => {
			console.log(res.data);
			commit("SET_ALL_ORDERS", res.data);
		});
	},
	openOrders({ commit }) {
		axios.get("/peatio/market/orders?state=wait").then(res => {
			commit("SET_OPEN_ORDERS", res.data);
		});
	},
	completedOrders({ commit }) {
		axios.get("/peatio/market/orders?state=done").then(res => {
			commit("SET_COMPLETED_ORDERS", res.data);
		});
	},
};
