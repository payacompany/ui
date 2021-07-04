<template>
	<div class="bg-white shadow-md mt-3 rounded-md p-5">
		<div>
			<slot name="header" />
		</div>
		<vs-divider />
		<div>
			<slot name="body" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
