import Vue from "vue";
export default {
	data() {
		return {
			socket: null,
		};
	},
	mounted() {
		this.socket = new WebSocket(
			"ws://dax.autovm.ir/api/v2/ranger/public/?stream=ethusd.ob-inc,ethusd.trades,global.tickers"
		);
		this.socket.onopen = res => {
			console.log("on open", res);
		};
		this.socket.onerror = function (event) {
			console.error("WebSocket error observed:", event);
		};
	},
	methods: {
		onOpenConnection() {
			this.socket.onopen = res => {
				console.log("on open", res);
			};
		},
	},
};
