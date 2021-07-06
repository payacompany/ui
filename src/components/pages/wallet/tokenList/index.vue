<template>
	<div class="flex flex-col">
		<div
			v-for="(coin, index) in coins"
			:key="index"
			class="
				
				hover:bg-gray-100 
				
                cursor-pointer
				transition
				ease-in
				duration-300
			"
		>
			<div
				@click="setActive(index)"
				class="flex flex-row justify-between py-5 pl-3"
				:class="[coin.isActive ? 'bg-gray-200 border-r-4 border-blue-500' : '']"
			>
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
	},
	methods: {
		setActive (index) {
			this.coins.forEach((coin, ind) => {
				if (index === ind) {
					coin.isActive = true;
				} else {
					coin.isActive = false;
				}
			});
		}
	}
};
</script>

<style></style>
