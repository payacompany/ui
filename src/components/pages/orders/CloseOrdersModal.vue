<template lang="html">
	<div class="centerx">
		<div
			@click="showModal = true"
			class="text-blue-500 underline text-md cursor-pointer font-bold"
		>
			{{ $t("pages.orders.allOrders.modal.title") }}
		</div>
		<vs-popup
			:title="$t('pages.orders.allOrders.modal.orderDetails')"
			:active.sync="showModal"
		>
			<div class="flex flex-col justify-between">
				<div class="flex justify-between">
					<p class="pb-8">{{ $t("pages.orders.allOrders.modal.orderId") }}:</p>
					<p>
						{{ orderDetails.id }}
					</p>
				</div>
				<div class="flex justify-between">
					<p class="pb-8">
						{{ $t("pages.orders.allOrders.modal.orderCreatedAt") }}:
					</p>
					<p>
						{{ orderDetails.created_at | jdate }}
					</p>
				</div>

				<div class="flex justify-between">
					<p class="pb-8">
						{{ $t("pages.orders.allOrders.modal.unitPerPrice") }}:
					</p>
					<p>
						{{ orderDetails.price }}
					</p>
				</div>

				<div class="flex justify-between">
					<p class="pb-8">{{ $t("pages.orders.allOrders.modal.volume") }}:</p>
					<p>
						{{ orderDetails.origin_volume }}
					</p>
				</div>
				<div class="flex justify-between">
					<p class="pb-8">{{ $t("pages.orders.allOrders.modal.feeOrder") }}:</p>
					<p>
						{{ orderDetails.taker_fee }}
					</p>
				</div>
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
