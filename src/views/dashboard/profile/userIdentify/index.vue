<template>
	<div class="shadow-xl w-6/12 center rounded-md py-8">
		<p class="text-bold text-xl text-center px-8">
			تکمیل اطلاعات هویتی
		</p>
		<vs-divider />
		<div class="px-8 mt-5">
			<div class="flex flex-row justify-between">
				<vs-input
					v-model="user.phone"
					class="w-11/12"
					label-placeholder="نام"
				/>
				<vs-input v-model="user.phone" label-placeholder="نام خانوادگی" />
				<vs-input v-model="user.phone" label-placeholder="کد ملی" />
			</div>
			<div class="flex flex-row justify-between mt-5">
				<div>
					<p class="text-sm font-bold mb-2">تصویر کارت ملی</p>
					<vs-upload
						automatic
						limit="1"
						text="آپلود تصویر"
						action="https://jsonplaceholder.typicode.com/posts/"
						@on-success="successUpload"
					/>
				</div>
				<div>
					<p class="text-sm font-bold mb-2">سلفی با کارت ملی</p>
					<vs-upload
						automatic
						limit="1"
						text="آپلود تصویر"
						action="https://jsonplaceholder.typicode.com/posts/"
						@on-success="successUpload"
					/>
				</div>
			</div>
			<div class="mt-5">
				<vs-button class="w-full">ارسال مدارک</vs-button>
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
	},
	methods: {
		successUpload () {
			this.$vs.notify({
				color: "success",
				title: "Upload Success",
				text: "Lorem ipsum dolor sit amet, consectetur"
			});
		}
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	.con-input-upload {
		margin: 0;
	}
}
</style>
