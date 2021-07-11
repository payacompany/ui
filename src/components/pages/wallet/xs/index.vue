<template>
	<div>
		<div v-for="(coin, index) in coins" :key="index">
			<div
				class="border-b py-3 px-5 flex flex-row justify-between items-center"
			>
				<div class="flex">
					<img src="" alt="coin" />
					<p class="text-gray-400">
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
	}
};
</script>

<style></style>
