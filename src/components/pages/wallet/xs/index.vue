<template>
	<div class="mx-3">
		<vs-collapse v-for="(coin, index) in coins" :key="index" type="margin">
			<vs-collapse-item>
				<div slot="header">
					{{ coin.name }}
				</div>
				<vs-tabs alignment="left">
					<vs-tab :label="$t('pages.wallet.deposit.title')" icon="add">
						<deposit />
					</vs-tab>
					<vs-tab :label="$t('pages.wallet.withdraw.title')" icon="payments">
						<withdraw />
					</vs-tab>
					<vs-tab :label="$t('pages.wallet.history.title')" icon="history">
						<transactions />
					</vs-tab>
				</vs-tabs>
			</vs-collapse-item>
		</vs-collapse>
	</div>
</template>

<script>
import Deposit from "../tokenDetails/Deposit.vue";
import Withdraw from "../tokenDetails/Withdraw.vue";
import Transactions from "../tokenDetails/Transactions.vue";

export default {
	components: { Deposit, Withdraw, Transactions },
	props: {
		coins: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-tabs--li {
		width: 33%;
		.vs-tabs--btn {
			justify-content: center;
		}
	}
}
</style>
