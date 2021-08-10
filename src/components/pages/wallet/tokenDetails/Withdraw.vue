<template>
	<div class="flex flex-col w-full">
		<withdraw-rules :withdraw-rules="withdrawRules" />
		<div class="w-min-full mt-2">
			<vs-input
				v-model="withdraw.address"
				class="min-w-full mb-3"
				:label-placeholder="
					$t('pages.wallet.withdraw.destinationAddressWallet')
				"
				:description-text="$t('pages.wallet.withdraw.descriptionText')"
			/>
			<vs-input
				v-model="withdraw.value"
				class="min-w-full"
				:label-placeholder="$t('pages.wallet.withdraw.amount')"
				:description-text="$t('pages.wallet.withdraw.amount') + ':' + 165151"
			/>
			<div class="flex justify-end">
				<vs-button size="small" class="mb-3" type="border">
					{{ $t("pages.wallet.withdraw.inventory") }}
				</vs-button>
			</div>
			<div class="mb-3">
				<vs-button class="w-full">
					{{ $t("pages.wallet.withdraw.title") }}
				</vs-button>
			</div>
		</div>
	</div>
</template>

<script>
import WithdrawRules from "./WithdrawRules.vue";
export default {
	components: { WithdrawRules },
	data() {
		return {
			withdraw: {},
			withdrawRules: {},
			// {
			// 		value: coin.min_withdraw_amount
			// 			? coin.min_withdraw_amount
			// 			: "",
			// 	},
			// 	{
			// 		value: coin.withdraw_limit_24h
			// 			? coin.withdraw_limit_24h
			// 			: "",
			// 	},
			// 	{
			// 		value: coin.withdraw_limit_72h
			// 			? coin.withdraw_limit_72h
			// 			: "",
			// 	},
			// 	{
			// 		value: coin.withdraw_fee
			// 			? coin.withdraw_fee
			// 			: "",
			// 	},
		};
	},
	computed: {
		activeCoin() {
			return this.$store.state.wallet.activeCoin;
		},
	},
	mounted() {
		this.setRules();
	},
	watch: {
		activeCoin() {
			this.setRules();
		},
	},
	methods: {
		setRules() {
			const coin = this.$store.state.wallet.activeCoin;

			this.withdrawRules = [
				{
					value: coin.min_withdraw_amount ? coin.min_withdraw_amount : "",
				},

				{
					value: coin.withdraw_limit_24h ? coin.withdraw_limit_24h : "",
				},
				{
					value: coin.withdraw_limit_72h ? coin.withdraw_limit_72h : "",
				},
				{
					value: coin.description ? coin.description : "",
				},
			];
		},
	},
};
</script>

<style></style>
