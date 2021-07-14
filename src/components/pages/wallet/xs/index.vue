<template>
	<div>
		<div class="border-b flex flex-col justify-between items-center w-full">
			<div class="flex px-5 justify-between border-b py-3 w-full">
				<p>{{ $t("pages.wallet.IRTestimate") }}:</p>
				<p>
					<span> {{ balanceIRT }} </span>
				</p>
			</div>
			<div class="flex px-5 justify-between border-b py-3 w-full">
				<p>{{ $t("pages.wallet.USDestimate") }}:</p>
				<p>
					<span> {{ balanceIRT }} </span>
				</p>
			</div>
		</div>
		<div v-for="(coin, index) in coins" :key="index">
			<div
				@click="$router.push(`/wallet/${coin.symbol}`)"
				class="border-b py-3 px-5 flex flex-row justify-between items-center"
			>
				<div class="flex items-center">
					<img
						src="@/assets/img/BTC.png"
						alt="coin"
						class="h-6 w-6 object-cover"
					/>
					<p class="text-gray-400 pr-2 pt-1">
						{{ coin.name }}
					</p>
					<p class="px-2">{{ coin.symbol }}</p>
				</div>
				<div class="flex">
					<p>{{ coin.price }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		coins: {
			type: Array,
			default: () => []
		}
	},
	data () {
		return {
			balanceIRT: 153000000
		};
	}
};
</script>

<style></style>
