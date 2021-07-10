<template lang="html">
	<div class="centerx">
		<vs-button
			size="small"
			color="primary"
			type="filled"
			@click="changePassModalActive = true"
		>
			{{ $t("pages.profile.changePassword.title") }}
		</vs-button>
		<vs-popup
			:title="$t('pages.profile.changePassword.title')"
			:active.sync="changePassModalActive"
		>
			<vs-input
				v-model="user.password"
				class="min-w-full mb-3"
				:placeholder="$t('pages.profile.changePassword.currentPassword')"
			/>
			<vs-input
				v-model="user.password"
				class="min-w-full mb-3"
				:placeholder="$t('pages.profile.changePassword.newPassword')"
			/>
			<vs-input
				v-model="user.password"
				class="min-w-full"
				:placeholder="$t('pages.profile.changePassword.repeatNewPassword')"
			/>
			<div class="mt-3">
				<vs-button class="w-full">
					{{ $t("pages.profile.changePassword.title") }}
				</vs-button>
			</div>
		</vs-popup>
	</div>
</template>

<script>
export default {
	data () {
		return {
			user: {},
			changePassModalActive: false
		};
	}
};
</script>
