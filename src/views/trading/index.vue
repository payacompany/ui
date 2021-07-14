<template>
	<div>
		<div class="hidden md:flex flex-row justify-between">
			<trades class="" />
			<div class="flex flex-col flex-grow">
				<trading-view />
				<open-orders />
			</div>
			<order-book class="flex-grow" />
			<div class="flex flex-col flex-grow flex-grow-0">
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

<style lang="scss" scoped></style>
