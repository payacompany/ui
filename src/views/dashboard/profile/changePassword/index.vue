<template>
	<div
		class="
			shadow-xl
			w-11/12
			md:w-8/12
			lg:w-5/12
			xl:w-3/12
			center
			rounded-md
			py-5
			px-5
		"
	>
		<p class="text-bold text-xl text-center px-8">
			{{ $t("pages.profile.changePassword.title") }}
		</p>
		<vs-divider />

		<vs-input
			v-model="user.password"
			class="min-w-full mb-3"
			:placeholder="$t('pages.profile.changePassword.currentPassword')"
		/>
		<vs-input
			v-model="user.newPassword"
			class="min-w-full mb-3"
			:placeholder="$t('pages.profile.changePassword.newPassword')"
		/>
		<vs-input
			v-model="user.repeatNewPassword"
			class="min-w-full"
			:placeholder="$t('pages.profile.changePassword.repeatNewPassword')"
		/>
		<div class="mt-3">
			<vs-button class="w-full" @click.prevent="changePassword">
				{{ $t("pages.profile.changePassword.title") }}
			</vs-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {},
		};
	},
	methods: {
		changePassword() {
			this.$store.dispatch("auth/changePassword", {
				old_password: this.user.password,
				new_password: this.user.newPassword,
				confirm_password: this.user.repeatNewPassword,
			});
		},
	},
};
</script>

<style></style>
