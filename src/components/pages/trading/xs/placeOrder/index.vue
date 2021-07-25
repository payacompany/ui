<template>
	<div>
		<div class="w-full">
			<vs-button
				class="w-1/2"
				color="success"
				type="filled"
				@click="placeOrderType = 0"
			>
				{{ $t("pages.trade.placeOrder.buy.title") }}
			</vs-button>
			<vs-button
				class="w-1/2"
				color="danger"
				type="filled"
				@click="placeOrderType = 1"
			>
				{{ $t("pages.trade.placeOrder.sell.title") }}
			</vs-button>
			<div class="w-full mt-2 mx-auto">
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
					class="min-w-full mt-2"
					:label="$t('pages.trade.placeOrder.price')"
					:laceholder="$t('pages.trade.placeOrder.pricePlaceHolder')"
				/>
				<vs-input
					class="min-w-full mt-2"
					:label="$t('pages.trade.placeOrder.volume')"
					:laceholder="$t('pages.trade.placeOrder.volumePlaceHolder')"
				/>
				<ranges />
				<div class="flex justify-between font-bold text-sm">
					<p>{{ $t("pages.trade.placeOrder.totalBalance") }}:</p>
					<p>0</p>
				</div>
				<div>
					<vs-button class="w-full mt-3" type="gradient" :color="color">
						{{
							placeOrderType == 0
								? $t("pages.trade.placeOrder.buy.title")
								: $t("pages.trade.placeOrder.sell.title")
						}}
					</vs-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Ranges from "../../placeOrder/Ranges.vue";
export default {
	components: { Ranges },
	data() {
		return {
			placeOrderType: 0,
			selectedType: 0,
			color: "success",
		};
	},
	watch: {
		placeOrderType(val) {
			val == 1 ? (this.color = "danger") : (this.color = "success");
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-button {
		border-radius: 0;
		&:first-child {
			border-radius: 0 5px 5px 0;
		}
		&:nth-child(2) {
			border-radius: 5px 0 0 5px;
		}
		&:last-child {
			border-radius: 5px;
		}
	}
}
</style>
