<template>
	<div>
		<div>
			<markets />
		</div>
		<vs-tabs alignment="left" class="text-xs">
			<vs-tab :label="$t('pages.trade.xs.tabs.placeOrder')">
				<place-order />
			</vs-tab>
			<vs-tab :label="$t('pages.trade.xs.tabs.charts')"> d </vs-tab>
			<vs-tab :label="$t('pages.trade.xs.tabs.orders')"> d </vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import PlaceOrder from "./placeOrder/index.vue";
import Markets from "./markets/index.vue";
export default {
	components: {
		Markets,
		PlaceOrder
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
