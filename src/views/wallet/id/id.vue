<template>
	<div>
		<coin-info />
		<history />
		<operations class="absolute bottom-2" />
	</div>
</template>

<script>
import CoinInfo from "../../../components/pages/wallet/xs/id/coinInfo.vue";
import History from "../../../components/pages/wallet/xs/id/history.vue";
import Operations from "../../../components/pages/wallet/xs/id/operations.vue";

export default {
	components: {
		CoinInfo,
		History,
		Operations
	}
};
</script>

<style></style>
