<template>
	<div class="grid grid-cols-5 gap-3 my-3">
		<div class="grid-flow-row auto-rows-max">
			<place-order />
			<markets />
		</div>
		<div class="grid-flow-row auto-rows-max">
			<order-book />
		</div>
		<div class="grid-flow-row auto-rows-max">
			<trading-view />
			<markets />
		</div>
	</div>
</template>

<script>
import PlaceOrder from "../../components/pages/trading/placeOrder/PlaceOrder.vue";
import Markets from "../../components/pages/trading/markets/index.vue";
import OrderBook from "../../components/pages/trading/orderBook/index.vue";
import TradingView from "../../components/pages/trading/tradingView/index.vue";
export default {
	components: {
		PlaceOrder,
		Markets,
		OrderBook,
		TradingView
	}
};
</script>

<style lang="scss" scoped></style>
