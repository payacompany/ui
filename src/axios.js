import axios from "axios";
export default axios.create({
	baseURL: "http://dax.autovm.ir/api/v2",
	headers: {
		"Content-Type": "application/json",
		// Cookie: document.cookie,
	},
});
