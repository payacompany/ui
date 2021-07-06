<template>
	<div>
		<div class="flex flex-row justify-between">
			<img :src="coins.logo" alt="" />
			<div class="w-10/12 flex flex-row justify-between">
				<div>
					<p>موجودی قفل شده</p>
					<p>{{ coin.lockedBalance }}</p>
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
