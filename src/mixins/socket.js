import Vue from "vue";
export default {
	data() {
		return {
			socket: null,
		};
	},
	mounted() {
		const cookie = Vue.$cookies.get("_barong_session", { httpOnly: false });
		Vue.$cookies.set("_barong_session", cookie, { httpOnly: false });
		// axios.defaults.headers.common["Cookie"] = `_barong_session=${cookie}`;
		Vue.$store.commit("auth/SET_COOKIE", cookie);

		console.log("mixin created", cookie);
		this.socket = new WebSocket(
			"wss://dax.autovm.ir/api/v2/ranger/private/?stream=deposit_address&stream=ethusd.ob-inc&stream=ethusd.trades&stream=global.tickers&stream=order&stream=trade"
		);
		this.onOpenConnection();
	},
	methods: {
		onOpenConnection() {
			this.socket.onopen(() => {
				console.log("connection created");
			});
		},
	},
};
