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
				سفارشات
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import OpenOrders from "./OpenOrders.vue";
export default {
	components: { OpenOrders }
};
</script>

<style></style>
