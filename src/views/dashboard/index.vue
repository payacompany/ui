<template>
	<div class="container mx-auto md:mt-12">
		<div class="md:w-full lg:8/12 mx-auto ">
			<profile />
			<api-keys />
			<account-activity />
		</div>
	</div>
</template>

<script>
import Profile from "../../components/pages/dashboard/profile/index.vue";
import ApiKeys from "../../components/pages/dashboard/apiKeys/index.vue";
import accountActivity from "../../components/pages/dashboard/accountActivity/index.vue";

export default {
	components: { Profile, ApiKeys, accountActivity }
};
</script>

<style></style>
