<template>
	<div class="shadow-xl w-3/12 center rounded-md py-8">
		<p class="text-bold text-xl text-center px-8">
			اعتبارسنجی شماره موبایل
		</p>
		<vs-divider />
		<div class="px-8 mt-8">
			<div class="flex flex-row justify-between">
				<vs-input
					v-model="user.phone"
					description-text="مثال:09120000000"
					label-placeholder="شماره موبایل"
				/>
				<div class="mt-4">
					<vs-button class="text-sm">ارسال کد</vs-button>
				</div>
			</div>
			<div>
				<vs-input
					v-model="user.phone"
					class="my-6 w-full"
					label-placeholder="کد تایید"
				/>
			</div>
			<div class="w-full">
				<vs-button class="text-sm w-full">ارسال کد</vs-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			user: {}
		};
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-input--input.normal {
		width: 19vw;
	}
}
</style>
