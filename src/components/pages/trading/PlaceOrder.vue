<template>
	<div class="shadow-md rounded-md">
		<vs-tabs alignment="center" :color="borderColor">
			<vs-tab label="خرید" @click="borderColor = 'success'">
				<buy-place-order />
			</vs-tab>
			<vs-tab label="فروش" @click="borderColor = 'danger'"> test </vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import BuyPlaceOrder from "./BuyPlaceOrder.vue";
export default {
	components: { BuyPlaceOrder },
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
