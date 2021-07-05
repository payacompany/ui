<template>
	<div class="container mx-auto mt-12">
		<div class="w-8/12 mx-auto">
			<profile />
			<api-keys />
		</div>
	</div>
</template>

<script>
import Profile from "../../components/pages/dashboard/profile/index.vue";
import ApiKeys from "../../components/pages/dashboard/apiKeys/index.vue";
export default {
	components: { Profile, ApiKeys }
};
</script>

<style></style>
