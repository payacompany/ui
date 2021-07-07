<template>
	<div class="grid grid-cols-5 gap-4 my-3">
		<div class="grid-flow-row auto-rows-max">
			<place-order />
			<markets />
		</div>
	</div>
</template>

<script>
import PlaceOrder from "../../components/pages/trading/placeOrder/PlaceOrder.vue";
import Markets from "../../components/pages/trading/markets/index.vue";

export default {
	components: {
		PlaceOrder,
		Markets
	}
};
</script>

<style></style>
