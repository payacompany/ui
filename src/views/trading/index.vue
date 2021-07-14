<template>
	<div>
		<div class="hidden md:flex flex-row justify-between mx-1">
			<trades class="" />
			<div class="flex flex-col flex-grow mx-1">
				<trading-view class="trading-view" />
				<open-orders />
			</div>
			<order-book class="flex-grow mx-1" />
			<div class="flex flex-col flex-grow flex-grow-0 mx-1">
				<place-order />
				<markets />
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
export default {
	components: {
		PlaceOrder,
		Markets,
		OrderBook,
		TradingView,
		OpenOrders,
		Trades,
		TradingXs
	}
};
</script>

<style lang="scss" scoped>
.trading-view {
	height: 60vh;
}
</style>
