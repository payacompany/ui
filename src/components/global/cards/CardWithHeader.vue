<template>
	<div class="bg-white shadow-md mt-3 rounded-md py-5">
		<div class="px-5">
			<slot name="header" />
		</div>
		<vs-divider />
		<div class="px-5">
			<slot name="body" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
