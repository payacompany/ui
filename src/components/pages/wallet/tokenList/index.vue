<template>
	<div class="flex flex-col">
		<div
			v-for="(coin, index) in coins"
			:key="index"
			class="
				py-5
				hover:bg-gray-100 
				pl-3
                cursor-pointer
			"
		>
			<div class="flex flex-row justify-between">
				<img :src="coin.logo" alt="" />
				<div class="flex flex-col w-11/12">
					<div class="flex justify-between">
						<p>
							{{ coin.symbol }}
						</p>
						<p>{{ coin.totalBalance }}{{ coin.symbol }}</p>
					</div>
					<div class="flex justify-between">
						<p>
							{{ coin.name }}
						</p>
						<p class="flex items-center">
							<span class="material-icons text-gray-500">
								lock
							</span>
							{{ coin.lockedBalance }}
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
			default: () => []
		}
	}
};
</script>

<style></style>
