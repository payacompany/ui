<template>
	<div class="shadow-md bg-white rounded-md mt-1 overflow-hidden">
		<VueTradingView
			:options="{
				locale: isRtl,
				symbol: 'BITBAY:BTCUSDT',
				theme: 'light',
				show_popup_button: true,
				popup_width: '1000',
				popup_height: '650',
			}"
		/>
	</div>
</template>

<script>
import VueTradingView from "vue-trading-view";
import i18n from "@/i18n";

export default {
	components: {
		VueTradingView,
	},
	data() {
		return {
			options: {
				symbol: "BTC/USD",
				theme: "light",
				locale: "fa_IR",
				allow_symbol_change: true,
				fullscreen: false,
				autosize: true,
			},
		};
	},
	computed: {
		isRtl() {
			return this.$i18n.locale === "Fa" ? "fa_IR" : "en";
		},
	},
};
</script>
