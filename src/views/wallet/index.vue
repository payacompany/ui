<template>
	<div class="container mx-auto md:mt-5">
		<div
			class="md:w-10/12 lg:w-8/12 mx-auto shadow-lg rounded-md hidden md:block"
		>
			<div class="mx-auto flex py-3 justify-evenly border-b rounded-t-lg">
				<div class="flex justify-between w-8/12">
					<p>
						{{ $t("pages.wallet.IRTestimate") }}:
						<span> {{ balanceIRT }} </span>
					</p>
					<p>
						{{ $t("pages.wallet.USDestimate") }}:
						<span> {{ balanceIRT }} </span>
					</p>
				</div>
			</div>
			<div class="mx-auto flex ">
				<wallet class="w-1/3 border-l-1" :coins="coins" />
				<token-details class="w-2/3" :coins="coins" />
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
	data () {
		return {
			balanceIRT: 153000000,
			coins: [
				{
					name: "BitCoin",
					symbol: "BTC",
					logo: null,
					totalBalance: 12,
					lockedBalance: 150,
					price: "34000",
					priceIRT: "800000000",
					isActive: true
				},
				{
					name: "Etherum",
					symbol: "ETH",
					logo: null,
					totalBalance: 0,
					lockedBalance: 0,
					price: "1200",
					priceIRT: "30000000",
					isActive: false
				}
			]
		};
	}
};
</script>

<style></style>
