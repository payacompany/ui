<template>
	<div>
		<div class="hidden md:grid lg:grid-cols-6 gap-3 lg:grid-rows-6 my-3">
			<div class="col-span-6 lg:col-span-1 xl:col-span-1 row-span-6">
				<trades />
			</div>
			<div class="col-span-6 lg:col-span-3 xl:col-span-3 row-span-6">
				<trading-view />
				<open-orders />
			</div>
			<div class="col-span-6 lg:col-span-1 xl:col-span-1 row-span-6">
				<order-book />
			</div>
			<div class="col-span-6 lg:col-span-1 xl:col-span-1 row-span-6">
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
