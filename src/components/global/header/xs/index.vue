<template>
	<div
		class="border-b px-3 py-2 shadow-md flex flex-row justify-between items-center md:hidden"
	>
		<div class="text-gray-500">
			<span class="material-icons" @click="$router.push('/')">
				account_circle
			</span>
		</div>
		<div>
			logo
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
::v-deep {
	span {
		font-size: 30px !important;
	}
}
</style>
