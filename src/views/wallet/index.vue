<template>
	<div class="container mx-auto mt-12">
		<div class="w-8/12 mx-auto flex shadow-lg rounded-md">
			<wallet class="w-1/3" />
			<!-- <wallet class="w-2/3" /> -->
		</div>
	</div>
</template>

<script>
import Wallet from "../../components/pages/wallet/index.vue";
export default {
	components: { Wallet }
};
</script>

<style></style>
