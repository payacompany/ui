<template>
	<div class="shadow-md rounded-md p-1 overflow-hidden">
		<VueTradingView :options="{ options }" />
	</div>
</template>

<script>
import VueTradingView from "vue-trading-view";

export default {
	components: {
		VueTradingView
	},
	data () {
		return {
			options: {
				symbol: "BTCUSD",
				theme: "light",
				locale: "fa_IR",
				allow_symbol_change: true
			}
		};
	}
};
</script>
