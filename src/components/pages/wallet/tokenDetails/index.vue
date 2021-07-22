<template>
	<div>
		<vs-tabs alignment="left">
			<vs-tab :label="$t('pages.wallet.deposit.title')" icon="add">
				<deposit />
			</vs-tab>
			<vs-tab :label="$t('pages.wallet.withdraw.title')" icon="minimize">
				<withdraw :coins="coins" />
			</vs-tab>
			<vs-tab :label="$t('pages.wallet.history.title')" icon="history">
				<transactions />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import Deposit from "./Deposit.vue";
import Transactions from "./Transactions.vue";
import Withdraw from "./Withdraw.vue";
export default {
	components: {
		Withdraw,
		Deposit,
		Transactions,
	},
	props: {
		coins: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	// .vs-tabs--li {
	// 	.vs-tabs--btn {
	// 		align-items: center !important;
	// 	}
	// 	&:nth-child(2) {
	// 		.vs-tabs--btn {
	// 			align-items: baseline !important;
	// 		}
	// 	}
	// }
}
</style>
