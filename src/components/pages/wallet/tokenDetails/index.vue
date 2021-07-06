<template>
	<div>
		<vs-tabs alignment="left">
			<vs-tab label="واریز" icon="add">
				<deposit />
			</vs-tab>
			<vs-tab label="برداشت" icon="payments">
				<withdraw :coins="coins" />
			</vs-tab>
			<vs-tab label="تاریخچه" icon="history">
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
		Transactions
	},
	props: {
		coins: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style></style>
