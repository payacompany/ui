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
			// 		value: this.activeCoin.min_withdraw_amount
			// 			? this.activeCoin.min_withdraw_amount
			// 			: "",
			// 	},
			// 	{
			// 		value: this.activeCoin.withdraw_limit_24h
			// 			? this.activeCoin.withdraw_limit_24h
			// 			: "",
			// 	},
			// 	{
			// 		value: this.activeCoin.withdraw_limit_72h
			// 			? this.activeCoin.withdraw_limit_72h
			// 			: "",
			// 	},
			// 	{
			// 		value: this.activeCoin.withdraw_fee
			// 			? this.activeCoin.withdraw_fee
			// 			: "",
			// 	},
		};
	},
	props: {
		coins: {
			type: Array,
			default: () => [],
		},
	},
	computed: {
		activeCoin() {
			return this.$store.state.wallet.activeCoin;
		},
	},
	watch: {
		activeCoin() {
			this.setRules();
		},
	},
	methods: {
		setRules() {
			console.log("rules changed!");
			this.withdrawRules = [
				{
					value: this.activeCoin.min_deposit_amount
						? this.activeCoin.min_deposit_amount
						: "",
				},

				{
					value: this.activeCoin.deposit_fee ? this.activeCoin.deposit_fee : "",
				},
				{
					value: this.activeCoin.description ? this.activeCoin.description : "",
				},
			];
		},
	},
};
</script>

<style></style>
