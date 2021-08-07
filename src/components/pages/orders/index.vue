<template>
	<div class="w-8/12 mx-auto shadow-lg rounded-md">
		<vs-tabs alignment="left">
			<vs-tab :label="$t('pages.orders.allOrders.title')" @click="getAllOrders">
				<all-orders />
			</vs-tab>
			<vs-tab :label="$t('pages.orders.openOrders.title')" @click="openOrders">
				<open-orders />
			</vs-tab>
			<vs-tab
				:label="$t('pages.orders.closeOrders.title')"
				@click="completedOrders"
			>
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
	components: { OpenOrders, CloseOrders, AllOrders },
	mounted() {
		this.getAllOrders();
	},
	methods: {
		getAllOrders() {
			this.$store.dispatch("orders/getAllOrders");
		},
		openOrders() {
			this.$store.dispatch("orders/openOrders");
		},
		completedOrders() {
			this.$store.dispatch("orders/completedOrders");
		},
	},
};
</script>

<style></style>
