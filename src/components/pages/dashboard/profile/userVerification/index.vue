<template>
	<div>
		<p class="text-base font-bold">احراز هویت</p>
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
		<div v-for="(step, index) in kycSteps" :key="index" class="mt-2">
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
					title: "مرحله اول",
					name: "احراز ایمیل",
					isCompleted: true
				},
				{
					title: "مرحله دوم",
					name: "اعتبارسنجی شماره موبایل",
					isCompleted: true
				},
				{
					title: "مرحله سوم",
					name: "تکمیل اطلاعات کاربری",
					isCompleted: false
				},
				{
					title: "مرحله چهارم",
					name: "ارسال مدارک",
					isCompleted: false
				},
				{
					title: "مرحله پنجم",
					name: "اطلاعات محل سکونت",
					isCompleted: false
				}
			]
		};
	}
};
</script>

<style></style>
