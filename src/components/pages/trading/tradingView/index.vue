<template>
	<div class="shadow-md">
		<VueTradingView
			:options="{
				symbol: 'NASDAQ:AAPL',
				theme: 'light'
			}"
		/>
	</div>
</template>

<script>
import VueTradingView from "vue-trading-view";

export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	components: {
		VueTradingView
	}
};
</script>
