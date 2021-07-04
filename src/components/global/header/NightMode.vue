<template>
	<div class="flex items-center">
		<span class="text-bold font-base">شب</span>
		<vs-switch v-model="darkMode" color="dark" />
		<span class="text-bold font-base">روز</span>
	</div>
</template>

<script>
export default {
	data () {
		return {
			darkMode: false
		};
	}
};
</script>

<style></style>
