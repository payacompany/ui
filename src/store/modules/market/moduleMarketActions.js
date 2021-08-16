import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	tickers({ commit }) {
		axios.get("/peatio/public/markets/tickers").then(res => {
			commit("SET_ALL_ORDERS", res.data);
		});
	},
};
