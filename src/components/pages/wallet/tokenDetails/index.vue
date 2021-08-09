<template>
	<div>
		<vs-tabs alignment="left" :color="borderColor">
			<vs-tab
				:label="$t('pages.wallet.deposit.title')"
				icon="add"
				@click="borderColor = 'success'"
			>
				<deposit :coins="currencieAllDetails" />
			</vs-tab>
			<vs-tab
				:label="$t('pages.wallet.withdraw.title')"
				icon="minimize"
				@click="borderColor = 'danger'"
			>
				<withdraw :coins="coins" />
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
		currencieAllDetails() {
			return this.$store.state.wallet.currencieAllDetails.filter(el => {
				console.log("el", el);
				el.isActive == true;
			});
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
