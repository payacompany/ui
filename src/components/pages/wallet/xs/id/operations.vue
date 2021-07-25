<template>
	<div class="w-full flex justify-between">
		<vs-button
			class="w-6/12 mx-2"
			type="gradient"
			color="success"
			@click="$router.push(`/wallet/BTC/deposit`)"
		>
			واریز
		</vs-button>
		<vs-button
			class="w-6/12 mx-2"
			type="gradient"
			color="danger"
			@click="$router.push(`/wallet/BTC/withdraw`)"
		>
			برداشت
		</vs-button>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
