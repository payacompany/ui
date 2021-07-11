<template>
	<div>
		<div class="container mx-auto mt-12 hidden md:block">
			<history />
		</div>
		<history-xs class="block md:hidden" />
	</div>
</template>

<script>
import History from "../../components/pages/history/index.vue";
import HistoryXs from "../../components/pages/history/xs/index.vue";
export default {
	components: {
		History,
		HistoryXs
	}
};
</script>

<style></style>
