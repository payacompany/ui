<template>
	<div>
		<header-bar class="hidden md:block" />
		<header-xs />
		<side-bar />
		<slot />
		<footer-xs />
	</div>
</template>

<script>
import HeaderBar from "../components/global/header/index.vue";
import FooterXs from "../components/global/footer/xs/index.vue";
import HeaderXs from "../components/global/header/xs/index.vue";
import SideBar from "../components/global/header/SideBar.vue";
export default {
	components: {
		HeaderBar,
		FooterXs,
		HeaderXs,
		SideBar,
	},
	// mounted() {
	// 	this.loadUserInfo();
	// },
	// methods: {
	// 	loadUserInfo() {
	// 		this.$store.dispatch("userInformations");
	// 	},
	// },
};
</script>

<style></style>
