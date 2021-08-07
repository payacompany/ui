import axios from "../../../axios";

// import axios from "@/axios.js";
export default {
	getAllOrders() {
		axios.get("/peatio/market/orders");
	},
	openOrders() {
		axios.get("/peatio/market/orders?state=wait");
	},
	completedOrders() {
		axios.get("/peatio/market/orders?state=done");
	},
};
