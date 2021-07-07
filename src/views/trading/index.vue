<template>
	<div class="grid grid-cols-6 gap-3 my-3">
		<div class="grid-flow-row auto-rows-max">
			<place-order />
			<markets />
		</div>
		<div class="grid-flow-row auto-rows-max">
			<order-book />
		</div>
		<div class="col-span-3 grid-flow-row auto-rows-max">
			<trading-view />
			<open-orders />
		</div>
	</div>
</template>

<script>
import PlaceOrder from "../../components/pages/trading/placeOrder/PlaceOrder.vue";
import Markets from "../../components/pages/trading/markets/index.vue";
import OrderBook from "../../components/pages/trading/orderBook/index.vue";
import TradingView from "../../components/pages/trading/tradingView/index.vue";
import OpenOrders from "../../components/pages/trading/openOrders/index.vue";
export default {
	components: {
		PlaceOrder,
		Markets,
		OrderBook,
		TradingView,
		OpenOrders
	}
};
</script>

<style lang="scss" scoped></style>
