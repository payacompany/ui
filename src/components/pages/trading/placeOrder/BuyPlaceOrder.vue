<template>
	<div class="w-11/12 mx-auto">
		<vs-select
			v-model="selectedType"
			:label="$t('pages.trade.placeOrder.filterTitle')"
			class="min-w-full"
		>
			<vs-select-item
				v-for="(item, index) in $t('pages.trade.placeOrder.filters')"
				:key="index"
				:value="item.value"
				:text="item.text"
			/>
		</vs-select>
		<vs-input
			class="min-w-full"
			:label="$t('pages.trade.placeOrder.price')"
			:laceholder="$t('pages.trade.placeOrder.pricePlaceHolder')"
		/>
		<vs-input
			class="min-w-full"
			:label="$t('pages.trade.placeOrder.volume')"
			:laceholder="$t('pages.trade.placeOrder.volumePlaceHolder')"
		/>
		<ranges />
		<div class="flex justify-between font-bold text-sm">
			<p>{{ $t("pages.trade.placeOrder.totalBalance") }}:</p>
			<p>0</p>
		</div>
		<div>
			<vs-button class="w-full mt-3" color="success">
				{{ $t("pages.trade.placeOrder.buy.title") }}
			</vs-button>
		</div>
	</div>
</template>

<script>
import Ranges from "./Ranges.vue";
export default {
	components: { Ranges },
	data() {
		return {
			selectedType: 0,
		};
	},
};
</script>

<style></style>
