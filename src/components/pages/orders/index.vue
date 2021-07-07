<template>
	<div class="w-8/12 mx-auto shadow-lg rounded-md">
		<vs-tabs alignment="left">
			<vs-tab label="سفارشات کل">
				سفارشات
			</vs-tab>
			<vs-tab label="سفارشات باز">
				<open-orders />
			</vs-tab>
			<vs-tab label="سفارشات تکمیل شده">
				<close-orders />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import CloseOrders from "./CloseOrders.vue";
import OpenOrders from "./OpenOrders.vue";
export default {
	components: { OpenOrders, CloseOrders }
};
</script>

<style></style>
