<template>
	<div class="bg-white mt-1 shadow-md rounded-md">
		<vs-tabs alignment="center" :color="borderColor">
			<vs-tab
				:label="$t('pages.trade.placeOrder.buy.title')"
				@click="borderColor = 'success'"
			>
				<buy-place-order />
			</vs-tab>
			<vs-tab
				:label="$t('pages.trade.placeOrder.sell.title')"
				@click="borderColor = 'danger'"
			>
				<sell-place-order />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import BuyPlaceOrder from "./BuyPlaceOrder.vue";
import SellPlaceOrder from "./SellPlaceOrder.vue";
export default {
	components: { BuyPlaceOrder, SellPlaceOrder },
	data () {
		return {
			borderColor: "success"
		};
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-tabs--li {
		width: 50%;
	}
}
</style>
