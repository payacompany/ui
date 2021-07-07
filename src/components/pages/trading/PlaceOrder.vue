<template>
	<div class="shadow-md rounded-md">
		<vs-tabs alignment="center">
			<vs-tab label="خرید">
				<buy-place-order />
			</vs-tab>
			<vs-tab label="فروش"> test </vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import BuyPlaceOrder from "./BuyPlaceOrder.vue";
export default {
	components: { BuyPlaceOrder }
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-tabs--li {
		width: 50%;
	}
}
</style>
