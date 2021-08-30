<template>
	<div class="shadow-lg">
		<div
			class="
				container-fluid
				mx-4
				pt-2
				flex flex-row
				items-center
				justify-between
			"
		>
			<!-- <night-mode /> -->
			<span class="material-icons cursor-pointer" @click="toggleSidebar">
				menu
			</span>
			<language-switcher />
		</div>
	</div>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
import NightMode from "./NightMode.vue";
export default {
	components: { NightMode, LanguageSwitcher },
	methods: {
		toggleSidebar() {
			this.$store.commit("TOGGLE_SIDEBAR");
		},
	},
};
</script>

<style></style>
