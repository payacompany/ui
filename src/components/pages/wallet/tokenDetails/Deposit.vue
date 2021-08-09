<template>
	<div>
		{{ coins }}
		<div class="flex flex-row justify-start">
			<div class="w-2/12">
				<img :src="coins.logo" alt="" />
			</div>
			<div class="w-9/12 flex flex-row justify-between">
				<div class="text-justify">
					<p>{{ $t("pages.wallet.lockedBalance") }}</p>
					<p>{{ coins.locked }}</p>
				</div>
				<div>
					<p>
						{{ $t("pages.wallet.balance") }}
						<span>{{ coins.balance }}</span>
					</p>
					<p>0</p>
				</div>
			</div>
		</div>
		<vs-divider />
		<deposit-rules class="mb-5" :deposit-rules="depositRules" />
		<div class="flex flex-col items-center">
			<div>
				<qr-code
					text="16sAxN2jf2RutFdyyWMn4ktFn2PgfbszaR"
					:size="200"
					class="pl-5"
				/>
			</div>
			<div class="pb-5">
				<span class="font-bold text-xs text-gray-500">
					{{ $t("pages.wallet.deposit.walletAddress") }}
				</span>
				<input-with-copy ref-code="16sAxN2jf2RutFdyyWMn4ktFn2PgfbszaR" />
			</div>
		</div>
	</div>
</template>

<script>
import InputWithCopy from "../../../global/inputs/InputWithCopy.vue";
import VueQRCodeComponent from "vue-qrcode-component";
import DepositRules from "./DepositRules.vue";
export default {
	components: {
		InputWithCopy,
		DepositRules,
		"qr-code": VueQRCodeComponent,
	},
	props: {
		coins: {
			type: Array,
			default: () => [],
		},
	},
	mounted() {
		console.log("depositRules", this.activeCoin);
		this.depositRules = [
			{
				value: this.activeCoin.min_deposit_amount
					? this.activeCoin.min_deposit_amount
					: "",
			},
			{
				value: this.activeCoin.min_withdraw_amount
					? this.activeCoin.min_withdraw_amount
					: "",
			},
			{
				value: this.activeCoin.withdraw_limit_24h
					? this.activeCoin.withdraw_limit_24h
					: "",
			},
			{
				value: this.activeCoin.withdraw_limit_72h
					? this.activeCoin.withdraw_limit_72h
					: "",
			},
			{
				value: this.activeCoin.withdraw_fee ? this.activeCoin.withdraw_fee : "",
			},
			{
				value: this.activeCoin.deposit_fee ? this.activeCoin.deposit_fee : "",
			},
			{
				value: this.activeCoin.description ? this.activeCoin.description : "",
			},
		];
	},
	computed: {
		activeCoin() {
			return this.$store.state.wallet.activeCoin;
		},
	},
	data() {
		return {
			depositRules: [],
		};
	},
};
</script>

<style></style>
