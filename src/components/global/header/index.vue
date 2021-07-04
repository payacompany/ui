<template>
	<div class="shadow-lg">
		<div class="container-fluid mx-4 py-4 flex flex-row justify-between">
			<vs-switch v-model="active5" dark>
				<template #circle>
					<i v-if="!active5" class="bx bxs-moon" />
					<i v-else class="bx bxs-sun" />
				</template>
			</vs-switch>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
