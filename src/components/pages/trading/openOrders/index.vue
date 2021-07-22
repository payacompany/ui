<template>
	<div class="shadow-md bg-white rounded-md mt-1">
		<div class="px-5 pt-2 flex justify-between items-center">
			<p class="font-bold text-sm">
				{{ $t("pages.trade.openOrders.title") }}
			</p>
			<div class="cursor-pointer">
				<!-- <vs-button
					class="font-bold text-lg"
					size="small"
					type="flat"
					icon="close"
				>
					{{ $t("pages.trade.openOrders.closeAll") }}
				</vs-button> -->
				<p class="text-sm flex items-center font-bold text-gray-400">
					<span class="material-icons px-1"> close </span>
					{{ $t("pages.trade.openOrders.closeAll") }}
				</p>
			</div>
		</div>
		<vs-divider />
		<open-orders-list />
	</div>
</template>

<script>
import OpenOrdersList from "./OpenOrdersList.vue";
export default {
	components: { OpenOrdersList },
};
</script>

<style></style>
