<template lang="html">
	<div class="centerx">
		<div
			@click="showModal = true"
			class="text-blue-500 underline text-md cursor-pointer"
		>
			{{ $t("pages.orders.allOrders.modal.title") }}
		</div>
		<vs-popup
			:title="$t('pages.orders.allOrders.modal.orderDetails')"
			:active.sync="showModal"
		>
			<div class="flex flex-wrap justify-between">
				<p class="pb-8">
					{{ $t("pages.orders.allOrders.modal.orderId") }}:
					<span>
						{{ orderDetails.id }}
					</span>
				</p>
				<p class="pb-8">
					{{ $t("pages.orders.allOrders.modal.orderCreatedAt") }}: :
					<span> {{ orderDetails.date }} </span>
				</p>
				<p class="pb-8">
					{{ $t("pages.orders.allOrders.modal.unitPerPrice") }}:
					<span> {{ orderDetails.priceInUnit }} تومان </span>
				</p>
				<p>
					{{ $t("pages.orders.allOrders.modal.volume") }}:
					<span> {{ orderDetails.volume }} </span>
				</p>
				<p>
					{{ $t("pages.orders.allOrders.modal.feeOrder") }}:
					<span> {{ orderDetails.fee }} تومان</span>
				</p>
				<p>
					{{ $t("pages.orders.allOrders.modal.totalPrice") }}:
					<span> {{ orderDetails.priceInUnit * orderDetails.volume }} </span>
				</p>
			</div>
		</vs-popup>
	</div>
</template>

<script>
export default {
	props: {
		orderDetails: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			showModal: false,
		};
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-button {
		border-radius: 25px;
	}
	.vs-button--text {
		color: white !important;
	}
}
</style>
