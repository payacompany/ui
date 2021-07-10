<template>
	<div>
		<p class="text-base font-bold">
			{{ $t("pages.profile.userVerification.title") }}
		</p>
		<div class="flex flex-row justify-between">
			<div v-for="(step, index) in kycSteps" :key="index" class="mt-2">
				<vs-button
					size="small"
					class="w-full font-bold"
					:color="step.isCompleted ? 'success' : 'primary'"
				>
					{{ step.title }}
				</vs-button>
			</div>
		</div>
		<div
			v-for="(step, index) in $t('pages.profile.userVerification.kycSteps')"
			:key="index"
			class="mt-2"
		>
			<verification-step :step="step" :index="index" />
		</div>
	</div>
</template>

<script>
import VerificationStep from "./VerificationStep.vue";
export default {
	components: { VerificationStep },
	data () {
		return {
			kycSteps: [
				{
					title: this.$t("pages.profile.userVerification.steps.stepOne.title"),
					name: this.$t("pages.profile.userVerification.steps.stepOne.name"),
					isCompleted: true,
					accessTo: "اجازه برداشت",
					isAllow: false
				},
				{
					title: "مرحله دوم",
					name: "اعتبارسنجی شماره موبایل",
					isCompleted: true,
					accessTo: "دسترسی به اتاق معاملات و واریز",
					isAllow: false
				},
				{
					title: "مرحله سوم",
					name: "تکمیل اطلاعات کاربری",
					isCompleted: true,
					accessTo: "اجازه برداشت روزانه تا حد مجاز 1 BTC",
					isAllow: false
				},
				{
					title: "مرحله چهارم",
					name: "اطلاعات بانکی",
					isCompleted: true,
					accessTo: "اجازه برداشت روزانه تا حد مجاز 10 BTC",
					isAllow: false
				},
				{
					title: "مرحله پنجم",
					name: "اطلاعات محل سکونت",
					isCompleted: false,
					accessTo: "اجازه برداشت روزانه تا حد مجاز 100 BTC",
					isAllow: false
				}
			]
		};
	},
	mounted () {
		this.kycStepsAllow();
	},
	methods: {
		kycStepsAllow () {
			let allow = false;
			this.kycSteps.forEach((step, index) => {
				if (!step.isCompleted && !allow) {
					step.isAllow = true;
					allow = true;
				}
			});
		}
	}
};
</script>

<style></style>
