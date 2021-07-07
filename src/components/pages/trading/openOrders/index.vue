<template>
	<div class="shadow-md rounded-md mt-2">
		<div class="px-5 pt-2 flex justify-between items-center">
			<p class="font-bold text-sm">
				سفارشات باز شما
			</p>
			<div>
				<vs-button size="small">
					بستن همه
				</vs-button>
			</div>
		</div>
		<vs-divider />
		<open-orders-list />
	</div>
</template>

<script>
import OpenOrdersList from "./OpenOrdersList.vue";
export default {
	components: { OpenOrdersList }
};
</script>

<style></style>
