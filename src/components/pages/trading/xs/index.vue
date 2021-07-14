<template>
	<div>
		<div>
			<markets />
		</div>
		<vs-tabs alignment="left" class="text-xs">
			<vs-tab :label="$t('pages.trade.xs.tabs.placeOrder')">
				<place-order />
				<order-book />
			</vs-tab>
			<vs-tab :label="$t('pages.trade.xs.tabs.charts')">
				<VueTradingView :options="{ options }" />
			</vs-tab>
			<vs-tab :label="$t('pages.trade.xs.tabs.orders')">
				<order-book />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import PlaceOrder from "./placeOrder/index.vue";
import Markets from "./markets/index.vue";
import OrderBook from "./orderBook/index.vue";
import VueTradingView from "vue-trading-view";

export default {
	components: {
		Markets,
		PlaceOrder,
		OrderBook,
		VueTradingView
	},
	data () {
		return {
			options: {
				symbol: "BTC/USD",
				theme: "light",
				locale: "fa_IR",
				allow_symbol_change: true,
				fullscreen: false,
				autosize: true
			}
		};
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-tabs--li {
		width: 33%;
	}
}
</style>
