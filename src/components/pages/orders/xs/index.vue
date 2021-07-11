<template>
	<div>
		<vs-tabs alignment="left">
			<vs-tab :label="$t('pages.orders.allOrders.title')">
				<all-orders />
			</vs-tab>
			<vs-tab :label="$t('pages.orders.openOrders.title')">
				<open-orders />
			</vs-tab>
			<vs-tab :label="$t('pages.orders.closeOrders.title')">
				<close-orders />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import CloseOrders from "./CloseOrders.vue";
import OpenOrders from "./OpenOrders.vue";
import AllOrders from "./AllOrders.vue";
export default {
	components: { OpenOrders, CloseOrders, AllOrders }
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-tabs--li {
		width: 33%;
		font-size: 12px;
	}
}
</style>
