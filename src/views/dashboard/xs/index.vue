<template>
	<div>
		<div class="container mx-auto md:mt-12 hidden md:block">
			<div class="md:w-full lg:8/12 mx-auto ">
				<profile />
				<api-keys />
				<account-activity />
			</div>
		</div>
		<div class="px-3 py-3 block md:hidden">
			<user-verifications />
		</div>
	</div>
</template>

<script>
import Profile from "../../../components/pages/dashboard/profile/index.vue";
import ApiKeys from "../../../components/pages/dashboard/apiKeys/index.vue";
import accountActivity from "../../../components/pages/dashboard/accountActivity/index.vue";
import UserVerifications from "../../../components/pages/dashboard/profile/userVerification/index.vue";

export default {
	components: { Profile, ApiKeys, accountActivity, UserVerifications }
};
</script>

<style></style>
