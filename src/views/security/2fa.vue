<template>
	<div class="shadow-xl w-11/12 md:w-6/12 center rounded-md py-8">
		<p class="text-bold text-xl text-center px-8">شناسایی دوعاملی</p>
		<vs-divider />
		{{ generate2faData.data.url }}
		<div class="px-8 mt-5">
			<div class="flex flex-col md:flex-row justify-center md:flex-start">
				<p>
					{{ convertToBase64(generate2faData.data.barcode) }}
				</p>
				{{ generate2faData.data.barcode }}
				<qr-code
					:text="convertToBase64(generate2faData.data.barcode)"
					:size="200"
					class="mx-auto"
				/>
				<div class="mr-8">
					<p>مراحل فعالسازی:</p>
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
							<vs-input class="mt-3 min-w-6/12" v-model="code" />
						</li>
					</ul>
				</div>
			</div>
			<div class="mt-5">
				<vs-button class="w-full" @click.prevent="otpConnect"
					>فعالسازی</vs-button
				>
			</div>
		</div>
	</div>
</template>

<script>
import VueQRCodeComponent from "vue-qrcode-component";
export default {
	components: {
		"qr-code": VueQRCodeComponent,
	},
	data() {
		return {
			generate2faData: {},
			code: null,
		};
	},
	mounted() {
		this.generate2fa();
	},
	methods: {
		convertToBase64(barcode) {
			console.log({ barcode });
			return btoa(barcode);
			console.log(btoa(barcode));
		},
		generate2fa() {
			console.log("ddd");
			this.$store.dispatch("auth/generate2fa").then(res => {
				console.log(res, "comp");
				this.generate2faData = res.data;
			});
		},
		otpConnect() {
			this.$store.dispatch("auth/enable2fa", { code: this.code }).then(res => {
				this.$router.push("/");
			});
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	.con-input-upload {
		margin: 0;
	}
}
</style>
