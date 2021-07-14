<template>
	<div>
		<div class="flex flex-row justify-between">
			<trades class="block" />
			<div class="flex flex-col">
				<trading-view />
				<open-orders />
			</div>
			<order-book />
			<div class="flex flex-col">
				<place-order />
				<markets />
			</div>
		</div>
		<!-- <trading-xs class="block md:hidden" /> -->
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

<style lang="scss" scoped></style>
