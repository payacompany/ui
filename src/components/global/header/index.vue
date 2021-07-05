<template>
	<div class="shadow-lg">
		<div class="container-fluid mx-4 py-4 flex flex-row justify-between">
			<night-mode />
			<side-bar />
		</div>
	</div>
</template>

<script>
import NightMode from "./NightMode.vue";
import SideBar from "./SideBar.vue";
export default {
	components: { NightMode, SideBar }
};
</script>

<style></style>
