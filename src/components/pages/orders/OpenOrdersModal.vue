<template lang="html">
	<div class="centerx">
		<vs-button color="primary" type="filled" @click="showModal = true">
			اطلاعات بیشتر
		</vs-button>
		<vs-popup title="جزئیات سفارش" :active.sync="showModal">
			<div class="flex flex-wrap justify-between">
				<p>
					شناسه سفارش:
					<span>
						{{ orderDetails.id }}
					</span>
				</p>
				<p>
					تاریخ سفارش:
					<span> {{ orderDetails.date }} </span>
				</p>
				<p>
					قیمت واحد سفارش:
					<span> {{ orderDetails.priceInUnit }} تومان </span>
				</p>
				<p>
					حجم سفارش:
					<span> {{ orderDetails.volume }} </span>
				</p>
				<p>
					میزان پر شده:
					<span> {{ orderDetails.volume }} </span>
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
			default: () => {}
		}
	},
	data () {
		return {
			showModal: false
		};
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
