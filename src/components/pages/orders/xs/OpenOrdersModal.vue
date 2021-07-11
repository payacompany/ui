<template lang="html">
	<div class="centerx">
		<vs-button
			color="primary"
			size="small"
			type="filled"
			@click="showModal = true"
		>
			{{ $t("pages.orders.openOrders.modal.title") }}
		</vs-button>
		<vs-popup
			:title="$t('pages.orders.openOrders.modal.orderDetails')"
			:active.sync="showModal"
		>
			<div class="flex flex-wrap justify-between">
				<p class="pb-8">
					{{ $t("pages.orders.openOrders.modal.orderId") }}:
					<span>
						{{ orderDetails.id }}
					</span>
				</p>
				<p class="pb-8">
					{{ $t("pages.orders.openOrders.modal.orderCreatedAt") }}: :
					<span> {{ orderDetails.date }} </span>
				</p>
				<p class="pb-8">
					{{ $t("pages.orders.openOrders.modal.unitPerPrice") }}: : :
					<span> {{ orderDetails.priceInUnit }} تومان </span>
				</p>
				<p>
					{{ $t("pages.orders.openOrders.modal.volume") }}: : :
					<span> {{ orderDetails.volume }} </span>
				</p>
				<p>
					{{ $t("pages.orders.openOrders.modal.filledVolume") }}: : :
					<span> {{ orderDetails.volumeCompleted }} </span>
				</p>

				<radial-progress-bar
					:diameter="100"
					:completed-steps="orderDetails.volumeCompleted"
					:total-steps="totalVol"
					start-color="#CD113B"
					stop-color="#4AA96C"
					inner-stroke-color="#F1F6F9"
				/>
			</div>
		</vs-popup>
	</div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
	components: {
		RadialProgressBar
	},
	props: {
		orderDetails: {
			type: Object,
			default: () => {}
		}
	},
	data () {
		return {
			showModal: false
		};
	},
	computed: {
		totalVol () {
			return this.orderDetails.volume;
		},
		completedVol () {
			return this.orderDetails.volumeCompleted;
		}
	}
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
