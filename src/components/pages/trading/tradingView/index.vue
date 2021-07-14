<template>
	<div class="shadow-md rounded-md overflow-hidden">
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
