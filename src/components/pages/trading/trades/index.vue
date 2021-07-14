<template>
	<div class="shadow-md bg-white rounded-md mt-1 py-1 min-h-screen">
		<div class="px-5 pt-2">
			<p class="font-bold text-sm">
				{{ $t("pages.trade.trades.title") }}
			</p>
		</div>
		<vs-divider />
		<vs-tabs alignment="center" :color="borderColor">
			<vs-tab
				:label="$t('pages.trade.trades.myTransactions.title')"
				@click="borderColor = 'success'"
			>
				<trade-list />
			</vs-tab>
			<vs-tab
				:label="$t('pages.trade.trades.marketTransactions.title')"
				@click="borderColor = 'danger'"
			>
				<trade-list />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import TradeList from "./TradeList.vue";

export default {
	components: { TradeList },
	data () {
		return {
			borderColor: "primary"
		};
	}
};
</script>

<style lang="scss" scoped>
.vs-divider {
	margin: 10px 0;
}
::v-deep {
	.vs-tabs--li {
		width: 50%;
	}
}
.height {
	min-height: 35vh;
}
</style>
