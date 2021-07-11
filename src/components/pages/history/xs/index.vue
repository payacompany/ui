<template>
	<div class="mx-auto shadow-lg rounded-md">
		<vs-tabs alignment="left">
			<vs-tab :label="$t('pages.history.bankTransactions.title')">
				<bank-history />
			</vs-tab>
			<vs-tab :label="$t('pages.history.cryptoTransations.title')">
				<crypto-history />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import BankHistory from "./BankHistory.vue";
import CryptoHistory from "./CryptoHistory.vue";
export default {
	components: { BankHistory, CryptoHistory }
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-tabs--li {
		width: 50%;
		font-size: 12px;
	}
}
</style>
