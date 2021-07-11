<template>
	<div class="shadow-md rounded-md mt-2 py-1 min-h-screen">
		<div class="px-5 pt-2">
			<p class="font-bold text-sm">
				{{ $t("pages.trade.orderBook.title") }}
			</p>
		</div>
		<vs-divider />
		<vs-tabs alignment="center" :color="borderColor">
			<vs-tab
				:label="$t('pages.trade.orderBook.all.title')"
				@click="borderColor = 'primary'"
			>
				<order-book-list class="height" />
				<order-book-list />
			</vs-tab>

			<vs-tab
				:label="$t('pages.trade.orderBook.buy.title')"
				@click="borderColor = 'success'"
			>
				<order-book-list />
			</vs-tab>
			<vs-tab
				:label="$t('pages.trade.orderBook.sell.title')"
				@click="borderColor = 'danger'"
			>
				<order-book-list />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import OrderBookList from "./orderBookList.vue";

export default {
	components: { OrderBookList },
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
		width: 33%;
	}
}
.height {
	min-height: 35vh;
}
</style>
