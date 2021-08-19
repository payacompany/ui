<template>
	<div>
		<div
			class="hidden md:flex flex-col-reverse lg:flex-row justify-between mx-1"
		>
			<trades class="" />
			<div class="flex flex-col flex-grow mx-1">
				<trading-view class="trading-view" />
				<open-orders />
			</div>
			<order-book class="flex-grow-0 mx-1" />
			<div class="flex flex-col flex-grow-0 mx-1">
				<place-order />
				<markets class="markets" />
			</div>
		</div>
		<trading-xs class="block md:hidden" />
	</div>
</template>

<script>
import TradingXs from "../../components/pages/trading/xs/index.vue";
import PlaceOrder from "../../components/pages/trading/placeOrder/PlaceOrder.vue";
import Markets from "../../components/pages/trading/markets/index.vue";
import OrderBook from "../../components/pages/trading/orderBook/index.vue";
import TradingView from "../../components/pages/trading/tradingView/index.vue";
import OpenOrders from "../../components/pages/trading/openOrders/index.vue";
import Trades from "../../components/pages/trading/trades/index.vue";
import Socket from "../../mixins/socket.js";
export default {
	components: {
		PlaceOrder,
		Markets,
		OrderBook,
		TradingView,
		OpenOrders,
		Trades,
		TradingXs,
	},
	data() {
		return {
			socket: null,
		};
	},
	// mixins: [Socket],
	mounted() {
		this.getTokensMarket();
		this.socket = new WebSocket(
			"ws://dax.autovm.ir/api/v2/ranger/private/?stream=deposit_address&stream=ethusd.ob-inc&stream=ethusd.trades&stream=global.tickers&stream=order&stream=trade"
		);
		this.socket.onopen = res => {
			console.log("on open", res);
		};
	},
	methods: {
		getTokensMarket() {
			this.$store.dispatch("market/tickers");
		},
	},
	// sockets: {
	// 	connect: function () {
	// 		console.log("socket connected");
	// 	},
	// 	customEmit: function (data) {
	// 		console.log(
	// 			'this method was fired by the socket server. eg: io.emit("customEmit", data)'
	// 		);
	// 	},
	// },
};
</script>

<style lang="scss" scoped>
.trading-view {
	height: 60vh;
}
.markets {
	height: 41vh;
}
</style>
