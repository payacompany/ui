<template>
	<div>
		<token-list :coins="coins" />
	</div>
</template>

<script>
import TokenList from "./tokenList/index.vue";
export default {
	components: { TokenList },
	data () {
		return {
			coins: [
				{
					name: "BitCoin",
					symbol: "BTC",
					logo: null,
					totalBalance: 0,
					lockedBalance: 0,
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
