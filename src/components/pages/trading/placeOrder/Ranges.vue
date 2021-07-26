<template>
	<div class="flex justify-between my-3">
		<ranges-child
			v-for="(range, index) in ranges"
			:key="index"
			:range="range"
		/>
	</div>
</template>

<script>
import RangesChild from "./RangesChild.vue";
export default {
	components: { RangesChild },
	data() {
		return {
			ranges: [25, 50, 75, 100],
		};
	},
};
</script>

<style></style>
