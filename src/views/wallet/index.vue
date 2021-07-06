<template>
	<div class="container mx-auto mt-12">
		<div class="w-8/12 mx-auto flex shadow-lg rounded-md">
			<wallet class="w-1/3 border-l-1" :coins="coins" />
			<token-details class="w-2/3" :coins="coins" />
		</div>
	</div>
</template>

<script>
import Wallet from "../../components/pages/wallet/index.vue";
import TokenDetails from "../../components/pages/wallet/tokenDetails/index.vue";
export default {
	components: { Wallet, TokenDetails },
	data () {
		return {
			coins: [
				{
					name: "BitCoin",
					symbol: "BTC",
					logo: null,
					totalBalance: 12,
					lockedBalance: 150,
					price: "34000",
					priceIRT: "800000000"
				},
				{
					name: "Etherum",
					symbol: "ETH",
					logo: null,
					totalBalance: 0,
					lockedBalance: 0,
					price: "1200",
					priceIRT: "30000000"
				}
			]
		};
	}
};
</script>

<style></style>
