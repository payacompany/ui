<template>
	<div>
		<div class="container mx-auto md:mt-12 hidden md:block">
			<orders />
		</div>
		<orders-xs />
	</div>
</template>

<script>
import OrdersXs from "../../components/pages/orders/xs/index.vue";
import Orders from "../../components/pages/orders/index.vue";
export default {
	components: { Orders, OrdersXs }
};
</script>

<style></style>
