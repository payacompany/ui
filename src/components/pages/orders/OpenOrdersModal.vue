<template lang="html">
	<div class="centerx">
		<div
			@click="showModal = true"
			class="text-blue-500 underline text-md cursor-pointer"
		>
			{{ $t("pages.orders.allOrders.modal.title") }}
		</div>
		<vs-popup
			:title="$t('pages.orders.openOrders.modal.orderDetails')"
			:active.sync="showModal"
		>
			{{ orderDetails }}
			<div class="flex flex-col justify-between">
				<div class="flex justify-between">
					<p class="pb-8">{{ $t("pages.orders.openOrders.modal.orderId") }}:</p>
					<p>
						{{ orderDetails.id }}
					</p>
				</div>
				<div class="flex justify-between">
					<p class="pb-8">
						{{ $t("pages.orders.openOrders.modal.orderCreatedAt") }}: :
					</p>
					<p>{{ orderDetails.created_at | jdate }}</p>
				</div>
				<div class="flex justify-between">
					<p class="pb-8">
						{{ $t("pages.orders.openOrders.modal.unitPerPrice") }}:
					</p>
					<p>{{ orderDetails.price }}</p>
				</div>
				<div class="flex justify-between">
					<p>{{ $t("pages.orders.openOrders.modal.volume") }}:</p>
					<p>
						{{ orderDetails.origin_volume }}
					</p>
				</div>
				<div class="flex justify-between">
					<p>{{ $t("pages.orders.openOrders.modal.filledVolume") }}:</p>
					<p>
						{{ orderDetails.origin_volume - orderDetails.remaining_volume }}
					</p>
				</div>
				<div>
					<radial-progress-bar
						:diameter="100"
						:completed-steps="orderDetails.remaining_volume"
						:total-steps="orderDetails.origin_volume"
						start-color="#CD113B"
						stop-color="#4AA96C"
						inner-stroke-color="#F1F6F9"
					/>
				</div>
			</div>
		</vs-popup>
	</div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
	components: {
		RadialProgressBar,
	},
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
	computed: {
		totalVol() {
			return this.orderDetails.volume;
		},
		completedVol() {
			return this.orderDetails.volumeCompleted;
		},
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
