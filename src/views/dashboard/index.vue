<template>
	<div>
		<div class="container mx-auto md:mt-12 hidden md:block">
			<div class="md:w-8/12 lg:w-10/12 mx-auto">
				<profile />
				<api-keys />
				<account-activity />
			</div>
		</div>
		<profile-xs />
	</div>
</template>

<script>
import ProfileXs from "../../components/pages/dashboard/profile/xs/index.vue";
import Profile from "../../components/pages/dashboard/profile/index.vue";
import ApiKeys from "../../components/pages/dashboard/apiKeys/index.vue";
import accountActivity from "../../components/pages/dashboard/accountActivity/index.vue";

export default {
	components: { Profile, ApiKeys, accountActivity, ProfileXs },
};
</script>

<style></style>
