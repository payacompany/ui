<template>
	<div>
		<div class="flex flex-row justify-start">
			<div class="w-2/12">
				<img :src="activeCoin.logo" alt="" />
			</div>
			<div class="w-9/12 flex flex-row justify-between">
				<div class="text-justify">
					<p>{{ $t("pages.wallet.lockedBalance") }}</p>
					<p>{{ activeCoin.locked }}</p>
				</div>
				<div>
					<p>
						{{ $t("pages.wallet.balance") }}
						<span>{{ activeCoin.balance }}</span>
					</p>
					<p>0</p>
				</div>
			</div>
		</div>
		<vs-divider />
		<deposit-rules class="mb-5" :deposit-rules="depositRules" />
		<div class="flex flex-col items-center">
			<div v-if="activeCoin.deposit_address">
				<qr-code
					v-if="activeCoin.deposit_address.address"
					:text="activeCoin.deposit_address.address"
					:size="200"
					class="pl-5"
				/>
				<vs-button v-else @click.prevent="generateDepositAddress">
					ایجاد آدرس
				</vs-button>
			</div>
			<div v-else>
				<vs-button @click.prevent="generateDepositAddress">
					ایجاد آدرس
				</vs-button>
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
		generateDepositAddress() {
			const activeToken = this.$store.state.wallet.activeCoin.currency;
			console.log(activeToken);
			this.$store.dispatch("wallet/generateDepositAddress", {
				currency: this.$store.state.wallet.activeCoin.currency,
			});
		},
		setRules() {
			const coin = this.$store.state.wallet.activeCoin;
			this.depositRules = [
				{
					value: coin.min_deposit_amount ? coin.min_deposit_amount : "",
				},

				{
					value: coin.deposit_fee ? coin.deposit_fee : "",
				},
				{
					value: coin.description ? coin.description : "",
				},
			];
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
