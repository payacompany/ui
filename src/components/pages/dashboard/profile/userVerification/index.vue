<template>
	<div>
		{{ level }}
		<p class="text-base font-bold">
			{{ $t("pages.profile.userVerification.title") }}
		</p>
		<div class="flex flex-row justify-between">
			<div
				v-for="(step, index) in $t('pages.profile.userVerification.kycSteps')"
				:key="index"
				class="mt-2"
			>
				<vs-button
					size="small"
					class="w-full font-bold"
					type="border"
					:color="index < level ? 'success' : 'primary'"
				>
					{{ step.title }}
				</vs-button>
			</div>
		</div>
		<div
			v-for="(step, index) in $t('pages.profile.userVerification.kycSteps')"
			:key="index"
			class="mt-2 border-b last:border-b-0"
		>
			<verification-step :step="step" :index="index" />
		</div>
	</div>
</template>

<script>
import VerificationStep from "./VerificationStep.vue";
export default {
	components: { VerificationStep },
	data() {
		return {};
	},
	mounted() {
		this.kycStepsAllow();
	},
	computed: {
		level() {
			return this.$store.state.myProfile.level;
		},
	},
	methods: {
		kycStepsAllow() {
			let allow = false;
			let steps = this.$t("pages.profile.userVerification.kycSteps");
			steps.forEach(step => {
				if (!step.isCompleted && !allow) {
					step.isAllow = true;
					allow = true;
				}
			});
		},
	},
};
</script>

<style></style>
