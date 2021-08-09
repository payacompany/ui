<template>
	<div class="flex flex-col">
		<div
			v-for="(coin, index) in coins"
			:key="index"
			class="hover:bg-gray-100 cursor-pointer transition ease-in duration-300"
		>
			<div
				@click="setActive(coin)"
				class="flex flex-row justify-between py-5 px-3"
				:class="[coin.isActive ? 'bg-gray-200 border-r-4 border-blue-500' : '']"
			>
				<img
					src="../../../../assets/img/BTC.png"
					alt=""
					class="w-10 h-10 mx-2 object-cover"
				/>
				<div class="flex flex-col w-11/12">
					<div class="flex justify-between">
						<p>
							{{ coin.isActive }}

							{{ coin.currency }}
						</p>
						<p>
							<span class="pr-2">{{ coin.symbol }}</span>
							{{ coin.balance }}
						</p>
					</div>
					<div class="flex justify-between">
						<p>
							{{ coin.name }}
						</p>
						<p class="flex items-center">
							{{ coin.locked }}
							<span class="material-icons text-gray-500 pr-3"> lock </span>
						</p>
					</div>
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
			default: () => [],
		},
	},
	methods: {
		// setActive(coin) {
		// 	console.log(coin, "coin");
		// 	this.$store.commit("wallet/SET_ACTIVE", coin);
		// },
	},
};
</script>

<style></style>
