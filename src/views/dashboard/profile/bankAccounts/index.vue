<template>
	<div
		class="shadow-xl w-11-12 md:w-8/12 lg:w-5/12 xl:w-3/12 center rounded-md py-8"
	>
		<p class="text-bold text-xl text-center px-8">
			اطلاعات حساب بانکی
		</p>
		<vs-divider />
		<div class="px-8 mt-2">
			<div class="flex flex-col justify-between">
				<vs-input
					v-model="bankAccounts.shabaNum"
					class="min-w-full"
					label-placeholder="شماره شبا"
				/>
				<div class="mt-2">
					<vs-input
						v-model="bankAccounts.shabaNum"
						class="min-w-full"
						label-placeholder="شماره کارت"
					/>
				</div>
			</div>
		</div>
		<div class="mt-5 px-8">
			<vs-button class="w-full">ثبت اطلاعات بانکی</vs-button>
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
