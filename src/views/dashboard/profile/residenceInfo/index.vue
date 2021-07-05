<template>
	<div class="shadow-xl w-3/12 center rounded-md py-8">
		<p class="text-bold text-xl text-center px-8">
			اطلاعات محل سکونت
		</p>
		<vs-divider />
		<div class="px-8 mt-2">
			<div class="flex flex-col justify-between">
				<div class="mt-2">
					<vs-input
						v-model="residenceInfo.state"
						label-placeholder="استان محل سکونت"
					/>
				</div>
				<div class="mt-2">
					<vs-input
						v-model="residenceInfo.city"
						label-placeholder="شهر محل سکونت"
					/>
				</div>
				<div class="mt-2">
					<vs-input v-model="residenceInfo.state" label-placeholder="آدرس" />
				</div>
				<div class="mt-2">
					<vs-input v-model="residenceInfo.city" label-placeholder="کد پستی" />
				</div>
				<div class="mt-2">
					<vs-input v-model="residenceInfo.city" label-placeholder="تلفن" />
				</div>
			</div>
		</div>
		<div class="mt-5 px-8">
			<vs-button class="w-full">ثبت اطلاعات</vs-button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			residenceInfo: {
				state: null,
				city: null,
				address: null,
				postalCode: null,
				cellNumber: null
			}
		};
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-input--input.normal {
		width: 21.5vw;
	}
}
</style>
