import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getAllOrders({ commit }) {
		axios.get("/peatio/market/orders").then(res => {
			commit("SET_ALL_ORDERS", res.data);
		});
	},
};
