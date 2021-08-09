<template>
	<div class="container mx-auto md:mt-5">
		{{ currencieAllDetails }}
		<div
			class="md:w-10/12 lg:w-8/12 mx-auto shadow-lg rounded-md hidden md:block"
		>
			<div class="mx-auto flex py-3 justify-evenly border-b rounded-t-lg">
				<div class="flex justify-between w-8/12">
					<p class="font-bold">
						{{ $t("pages.wallet.IRTestimate") }}:
						<span class="text-success"> {{ balanceIRT }} </span>
					</p>
					<p class="font-bold">
						{{ $t("pages.wallet.USDestimate") }}:
						<span class="text-success"> {{ balanceIRT }} </span>
					</p>
				</div>
			</div>
			<div class="mx-auto flex">
				<wallet class="w-1/3 border-l-1" :coins="currencieAllDetails" />
				<token-details class="w-2/3" :coins="currencieAllDetails" />
			</div>
		</div>
		<wallet-xs class="block md:hidden" :coins="coins" />
	</div>
</template>

<script>
import Wallet from "../../components/pages/wallet/index.vue";
import WalletXs from "../../components/pages/wallet/xs/index.vue";
import TokenDetails from "../../components/pages/wallet/tokenDetails/index.vue";
export default {
	components: { Wallet, TokenDetails, WalletXs },
	data() {
		return {
			balanceIRT: 0,
			coins: [],
		};
	},
	created() {
		this.getWalletBalances();
		this.getCurrencies();
	},
	methods: {
		getWalletBalances() {
			this.$store.dispatch("wallet/getBalances");
		},
		getCurrencies() {
			this.$store.dispatch("wallet/getCurrencies");
		},
	},
	computed: {
		balances() {
			return this.$store.state.wallet.balances;
		},
		currencies() {
			return this.$store.state.wallet.currencies;
		},
		currencieAllDetails() {
			return this.$store.state.wallet.currencieAllDetails;
		},
	},
};
</script>

<style></style>
