<template>
	<div class="flex flex-col sm:flex-row justify-between px-3 py-4">
		<div class="sm:w-1/2 w-full">
			<div
				class="flex justify-between border px-3 pt-2 rounded-md"
				@click="switchIcon"
			>
				<p>
					{{ market }}
				</p>
				<p>
					<span class="material-icons">
						{{ icon }}
					</span>
				</p>
				<!-- <vs-input
				v-model="market"
				type="text"
				class="min-w-full"
				:icon-after="true"
				:icon="icon"
				@click="switchIcon"
			/> -->
			</div>
		</div>
		<div class="flex flex-col sm:w-1/2 w-full px-2">
			<div class="flex justify-between items-center my-3 font-bold">
				<p :class="[token.price >= 0 ? 'text-success' : 'text-danger']">
					0
				</p>
				<p
					class="px-3"
					:class="[
						token.percent >= 0
							? 'bg-success bg-opacity-25 rounded-sm'
							: 'bg-danger bg-opacity-25 rounded-sm'
					]"
				>
					%
					<span class="opacity-100"> {{ token.percent }}</span>
				</p>
			</div>
			<div class="flex justify-between">
				<p>{{ $t("pages.trade.xs.markets.volume") }}:</p>
				<p>
					0
				</p>
			</div>
			<div class="flex justify-between">
				<p>{{ $t("pages.trade.xs.markets.high") }}:</p>
				<p>
					0
				</p>
			</div>
			<div class="flex justify-between">
				<p>{{ $t("pages.trade.xs.markets.low") }}:</p>
				<p>
					0
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			market: "ETHIRT",
			token: {
				price: 0,
				percent: 0
			},
			icon: "expand_more"
		};
	},
	methods: {
		switchIcon () {
			if (this.icon === "expand_more") {
				this.icon = "expand_less";
			} else {
				this.icon = "expand_more";
			}
		}
	}
};
</script>

<style></style>
