<template>
	<div class="shadow-lg">
		<div
			class="container-fluid mx-4 pt-2 flex flex-row items-center justify-between"
		>
			<!-- <night-mode /> -->
			<language-switcher />
			<side-bar />
		</div>
	</div>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
import NightMode from "./NightMode.vue";
import SideBar from "./SideBar.vue";
export default {
	components: { NightMode, SideBar, LanguageSwitcher }
};
</script>

<style></style>
