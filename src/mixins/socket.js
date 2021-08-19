import Vue from "vue";
export default {
	data() {
		return {
			socket: null,
		};
	},
	mounted() {
		console.log(this.$store.state.auth);
		const cookie = Vue.$cookies.get("_barong_session", {
			httpOnly: false,
		});
		Vue.$cookies.set("_barong_session", cookie, {
			httpOnly: false,
		});
		// axios.defaults.headers.common["Cookie"] = `_barong_session=${cookie}`;
		console.log("cookie", cookie);
		console.log("mixin created", cookie);
		this.socket = new WebSocket(
			"ws://dax.autovm.ir/api/v2/ranger/private/?stream=deposit_address&stream=ethusd.ob-inc&stream=ethusd.trades&stream=global.tickers&stream=order&stream=trade",
			[],
			{
				headers: {
					Cookie: "_barong_session=f7001d9081e0f2a14e8db8ff6b9034ab;",
				},
			}
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
