import Vue from "vue";
export default {
	data() {
		return {
			socket: null,
		};
	},
	mounted() {
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
					Cookie: cookie,
				},
			}
		);
		this.socket.onopen = res => {
			console.log("on open", res);
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
