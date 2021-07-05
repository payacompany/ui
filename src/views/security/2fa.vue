<template>
	<div class="shadow-xl w-6/12 center rounded-md py-8">
		<p class="text-bold text-xl text-center px-8">
			شناسایی دوعاملی
		</p>
		<vs-divider />
		<div class="px-8 mt-5">
			<qr-code text="Text to encode" />
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
