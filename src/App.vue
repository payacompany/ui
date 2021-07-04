<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	/* eslint-disable prettier-vue/prettier */
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
