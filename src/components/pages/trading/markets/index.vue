<template>
	<div class="shadow-md rounded-md mt-2 py-1">
		<div class="px-5 pt-2">
			<p class="font-bold text-sm">
				بازار ها
			</p>
		</div>
		<vs-divider />
		<market-list />
		<vs-input
			v-model="search"
			class="min-w-full px-3"
			icon="search"
			placeholder="جستجو بازار مورد نظر"
		/>
	</div>
</template>

<script>
import MarketList from "./MarketList.vue";

export default {
	components: { MarketList },
	data () {
		return {
			search: ""
		};
	}
};
</script>

<style lang="scss" scoped>
.vs-divider {
	margin: 10px 0;
}
</style>
