<template>
	<div id="app">
		<header-bar />
		<router-view />
	</div>
</template>

<script>
import HeaderBar from "./components/global/header/index.vue";
export default {
	/* eslint-disable prettier-vue/prettier */
	components: {
		HeaderBar
	}
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.3s;
	transition-property: opacity;
	transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
