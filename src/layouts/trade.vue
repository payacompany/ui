<template>
	<div class="trade">
		<header-bar class="hidden md:block" />
		<header-xs />
		<slot />
	</div>
</template>

<script>
import HeaderBar from "../components/global/header/index.vue";
import HeaderXs from "../components/global/header/xs/index.vue";

export default {
	name: "Trade",
	components: {
		HeaderBar,
		HeaderXs
	}
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1800px) {
	.trade {
		height: 100vh;
		overflow: hidden;
	}
}
</style>
