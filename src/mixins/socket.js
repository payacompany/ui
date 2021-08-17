export default {
	data() {
		return {
			socket: null,
		};
	},
	mounted() {
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
