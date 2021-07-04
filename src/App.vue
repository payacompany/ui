<template>
	<div id="app">
		<component :is="layout">
			<transition name="fade" mode="out-in">
				<router-view :layout="layout" />
			</transition>
		</component>
	</div>
</template>

<script>
export default {
	/* eslint-disable prettier-vue/prettier */
	computed: {
		layout () {
			return this.$route.meta.layout || "default-layout";
		}
	}
};
</script>
