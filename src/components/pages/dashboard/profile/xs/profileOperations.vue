<template>
	<div>
		<div
			v-for="(operation, index) in $t('pages.profile.xs')"
			:key="index"
			class="py-3 border-b flex flex-row justify-between px-3 items-center"
			@click="pushToRoute(index)"
		>
			<p>
				{{ operation.title }}
			</p>
			<p class="flex items-center">
				<span v-if="index == 0" class="text-blue-400">
					{{ $t("pages.profile.xs[0].level") }} {{ user.profileVerification }}
				</span>
				<span
					v-if="index == 1"
					:class="[!user.twoFactorAuth ? 'text-danger' : 'text-success']"
				>
					{{
						!user.twoFactorAuth
							? $t("pages.profile.enable")
							: $t("pages.profile.disable")
					}}
				</span>
				<span class="material-icons text-gray-400">
					{{ isRtl }}
				</span>
			</p>
		</div>
	</div>
</template>

<script>
import i18n from "@/i18n/index.js";
export default {
	data () {
		return {
			user: {
				profileVerification: 1,
				twoFactorAuth: false
			}
		};
	},
	methods: {
		pushToRoute (index) {
			switch (index) {
				case 0:
					this.$router.push("/profile/verification");
					break;
				case 1:
					this.$router.push("/security/2fa");
					break;
				case 2:
					this.$router.push("/profile/change-password");
					break;
				case 3:
					this.$router.push("/profile/account-activity");
					break;
				case 4:
					this.$router.push("/profile/api-management");
					break;

				default:
					break;
			}
		}
	},
	computed: {
		isRtl () {
			return this.$i18n.locale === "Fa" ? "chevron_left" : "chevron_right";
		}
	}
};
</script>

<style></style>
