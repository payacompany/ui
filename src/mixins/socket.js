export default {
	data() {
		return {
			connection: null,
		};
	},
	mounted() {
		this.connection = new VueSocketIO({
			debug: true,
			secure: true,
			transports: ["websocket", "pulling"],
			connection:
				"ws://dax.autovm.ir/api/v2/ranger/public/?stream=global.tickers",
			vuex: {
				store,
				actionPrefix: "SOCKET_",
				mutationPrefix: "SOCKET_",
			},
		});
		connection.connect();
	},
};
