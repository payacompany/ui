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
			py-8
		"
	>
		<p class="text-bold text-xl text-center px-8">
			{{ $t("pages.profile.verifiyStep.phoneVerification.title") }}
		</p>
		<vs-divider />
		<div class="px-8 mt-8">
			<div class="flex flex-row justify-between">
				<div class="w-8/12 lg:w-9/12">
					<vs-input
						v-model="user.phone"
						:description-text="
							$t('pages.profile.verifiyStep.phoneVerification.exampleText')
						"
						class="inline-block min-w-full"
						:label-placeholder="
							$t('pages.profile.verifiyStep.phoneVerification.placeHolder')
						"
					/>
				</div>
				<div class="mt-4">
					<vs-button class="inline-block text-sm" @click.prevent="getCode">
						{{ $t("pages.profile.verifiyStep.phoneVerification.sendCode") }}
					</vs-button>
				</div>
			</div>
			<div>
				<vs-input
					v-model="user.verifyCode"
					class="my-6 min-w-full"
					:label-placeholder="
						$t('pages.profile.verifiyStep.phoneVerification.acceptCode')
					"
				/>
			</div>
			<div class="w-full">
				<vs-button class="text-sm w-full" @click.prevent="verifyPhone">
					{{ $t("pages.profile.verifiyStep.phoneVerification.submit") }}
				</vs-button>
			</div>
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
		getCode() {
			this.$store.dispatch("profile/getVerifyPhoneCode", {
				phone_number: this.user.phone,
			});
		},
		verifyPhone() {
			this.$store.dispatch("profile/verifyPhone", {
				phone_number: this.user.phone,
				verification_code: this.user.verifyCode,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
// ::v-deep {
// 	.vs-input--input.normal {
// 		width: 19vw;
// 	}
// }
</style>
