<template>
	<div>
		<vs-tabs alignment="left">
			<vs-tab label="واریز">
				<withdraw :coins="coins" />
			</vs-tab>
			<vs-tab label="برداشت">
				<deposit />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import Deposit from "./Deposit.vue";
import Withdraw from "./Withdraw.vue";
export default {
	components: {
		Withdraw,
		Deposit
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
