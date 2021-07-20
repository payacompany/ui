<template>
	<div class="shadow-md bg-white rounded-md mt-1">
		<div class="px-5 pt-2 flex justify-between items-center">
			<p class="font-bold text-sm">
				{{ $t("pages.trade.openOrders.title") }}
			</p>
			<div>
				<vs-button size="small" type="flat" icon="close">
					{{ $t("pages.trade.openOrders.closeAll") }}
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
	components: { OpenOrdersList },
};
</script>

<style></style>
