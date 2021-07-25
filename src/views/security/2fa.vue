<template>
	<div class="shadow-xl w-11/12 md:w-6/12 center rounded-md py-8">
		<p class="text-bold text-xl text-center px-8">
			شناسایی دوعاملی
		</p>
		<vs-divider />
		<div class="px-8 mt-5">
			<div class="flex flex-col md:flex-row justify-center md:flex-start">
				<qr-code text="Text to encode" :size="200" class="mx-auto" />
				<div class="mr-8">
					<p>
						مراحل فعالسازی:
					</p>
					<ul class="text-gray-400">
						<li class="mt-3 text-sm">
							1.ابتدا نرم افزار googleAuthenticator را از
							<strong class="text-blue-500 cursor-pointer">گوگل پلی</strong> یا
							<strong class="text-blue-500 cursor-pointer">پلی استور</strong> یا
							<strong class="text-blue-500 cursor-pointer">کافه بازار</strong>
							دانلود کنید.
						</li>
						<li class="mt-3 text-sm">
							2.با کمک نرم افزار دانلود شده میتوانید qrcode رو به رو را اسکن
							کنید یا میتوانید کد زیر را وارد کنید.
							<span>
								(توجه داشته باشید کد زیر همواره درجایی امن نگه داری کنید.)
							</span>
							<vs-input class="mt-3 min-w-full" />
						</li>
						<li class="mt-3 text-sm flex items-baseline justify-between">
							3.در مرحله سوم کد نمایش داده شده در googleAuthenticator را وارد
							نمایید
							<vs-input class="mt-3 min-w-6/12" />
						</li>
					</ul>
				</div>
			</div>
			<div class="mt-5">
				<vs-button class="w-full">فعالسازی</vs-button>
			</div>
		</div>
	</div>
</template>

<script>
import VueQRCodeComponent from "vue-qrcode-component";
export default {
	components: {
		"qr-code": VueQRCodeComponent
	},
	data () {
		return {};
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
