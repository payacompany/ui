<template>
	<div>
		<transactions-table :transactions="transactions" />
	</div>
</template>

<script>
import TransactionsTable from "./TransactionsTable.vue";
export default {
	components: { TransactionsTable },
	computed: {
		transactions() {
			return this.$store.state.wallet.transactions;
		},
	},
};
</script>

<style></style>
