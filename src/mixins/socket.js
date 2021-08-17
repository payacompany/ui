export default {
	data() {
		return {
			socket: null,
		};
	},
	mounted() {
		const cookie = this.$cookies.get("_barong_session", { httpOnly: false });
		this.$cookies.set("_barong_session", cookie, { httpOnly: false });
		axios.defaults.withCredentials = true;
		// axios.defaults.headers.common["Cookie"] = `_barong_session=${cookie}`;
		this.$store.commit("auth/SET_COOKIE", cookie);

		console.log("mixin created");
		this.socket = new WebSocket(
			"ws://dax.autovm.ir/api/v2/ranger/private/?stream=deposit_address&stream=ethusd.ob-inc&stream=ethusd.trades&stream=global.tickers&stream=order&stream=trade"
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
