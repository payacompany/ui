export default {
	data() {
		return {
			socket: null,
		};
	},
	mounted() {
		console.log("mixin created");
		this.socket = new WebSocket("ws://dax.autovm.ir/api/v2/ranger/private/");
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
