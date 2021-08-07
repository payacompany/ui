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
	mounted() {
		const cookie = this.$cookies.get("_barong_session", { httpOnly: true });
		this.$cookies.set("_barong_session", cookie, { httpOnly: true });
		axios.defaults.withCredentials = true;
		// axios.defaults.headers.common["Cookie"] = `_barong_session=${cookie}`;
		this.$store.commit("auth/SET_COOKIE", cookie);
		this.loadUserInfo();
	},
	methods: {
		loadUserInfo() {
			this.$store.dispatch("userInformations");
		},
	},
};
</script>

<style></style>
