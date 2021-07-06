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
				transition
				ease-in
				duration-300
			"
		>
			<div class="flex flex-row justify-between ">
				<img :src="coin.logo" alt="" />
				<div class="flex flex-col w-11/12">
					<div class="flex justify-between">
						<p>
							{{ coin.symbol }}
						</p>
						<p>
							<span class="pr-2">{{ coin.symbol }}</span>
							{{ coin.totalBalance }}
						</p>
					</div>
					<div class="flex justify-between">
						<p>
							{{ coin.name }}
						</p>
						<p class="flex items-center">
							{{ coin.lockedBalance }}
							<span class="material-icons text-gray-500 pr-3">
								lock
							</span>
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
