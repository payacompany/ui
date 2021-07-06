<template>
	<div>
		<token-list :coins="coins" />
	</div>
</template>

<script>
import TokenList from "./tokenList/index.vue";
export default {
	components: { TokenList },
	props: {
		coins: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style></style>
