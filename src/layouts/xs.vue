<template>
	<div>
		<div
			class="border-b px-3 py-2 shadow-md flex flex-row justify-end items-center md:hidden"
		>
			<vs-button
				icon="arrow_back"
				size="small"
				color="danger"
				type="gradient"
				@click="$router.go(-1)"
			/>
		</div>
		<slot />
	</div>
</template>

<script>
export default {};
</script>

<style></style>
