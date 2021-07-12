<template>
	<div
		class="shadow-xl w-11-12 md:w-8/12 lg:w-5/12 xl:w-3/12 center rounded-md py-8"
	>
		<p class="text-bold text-xl text-center px-8">
			{{ $t("pages.profile.verifiyStep.bankAccountVarification.title") }}
		</p>
		<vs-divider />
		<div class="px-8 mt-2">
			<div class="flex flex-col justify-between">
				<vs-input
					v-model="bankAccounts.shabaNum"
					class="min-w-full"
					:label-placeholder="
						$t('pages.profile.verifiyStep.bankAccountVarification.title')
					"
				/>
				<div class="mt-2">
					<vs-input
						v-model="bankAccounts.shabaNum"
						class="min-w-full"
						:label-placeholder="
							$t('pages.profile.verifiyStep.bankAccountVarification.title')
						"
					/>
				</div>
			</div>
		</div>
		<div class="mt-5 px-8">
			<vs-button class="w-full">
				{{ $t("pages.profile.verifiyStep.bankAccountVarification.submit") }}
			</vs-button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			bankAccounts: {
				shabaNum: null,
				bankNumber: null
			}
		};
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	// .vs-input--input.normal {
	// 	width: 21.5vw;
	// }
}
</style>
