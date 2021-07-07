<template lang="html">
	<div class="centerx">
		<vs-button color="primary" type="filled" @click="showModal = true">
			اطلاعات بیشتر
		</vs-button>
		<vs-popup title="جزئیات سفارش" :active.sync="showModal">
			<div class="flex flex-wrap justify-between">
				<p class="pb-8">
					شناسه سفارش:
					<span>
						{{ orderDetails.id }}
					</span>
				</p>
				<p class="pb-8">
					تاریخ سفارش:
					<span> {{ orderDetails.date }} </span>
				</p>
				<p class="pb-8">
					قیمت واحد سفارش:
					<span> {{ orderDetails.priceInUnit }} تومان </span>
				</p>
				<p>
					حجم سفارش:
					<span> {{ orderDetails.volume }} </span>
				</p>
				<p>
					حجم پرشده:
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
