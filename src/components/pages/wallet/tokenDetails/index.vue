<template>
	<div>
		<vs-tabs alignment="left" :color="borderColor">
			<vs-tab
				:label="$t('pages.wallet.deposit.title')"
				icon="add"
				@click="borderColor = 'success'"
			>
				<deposit :coins="activeCoin" />
			</vs-tab>
			<vs-tab
				:label="$t('pages.wallet.withdraw.title')"
				icon="minimize"
				@click="borderColor = 'danger'"
			>
				<withdraw :coins="activeCoin" />
			</vs-tab>
			<vs-tab
				:label="$t('pages.wallet.history.title')"
				icon="history"
				@click="borderColor = 'primary'"
			>
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
	data() {
		return {
			borderColor: "success",
		};
	},
	computed: {
		activeCoin() {
			return this.$store.state.wallet.activeCoin;
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	.material-icons {
		color: inherit;
	}
}
</style>
