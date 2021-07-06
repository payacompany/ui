<template>
	<div>
		<div class="flex flex-row justify-start">
			<div class="w-2/12">
				<img :src="coins.logo" alt="" />
			</div>
			<div class="w-9/12 flex flex-row justify-between">
				<div class="text-justify">
					<p>موجودی قفل شده</p>
					<p>0</p>
				</div>
				<div>
					<p>
						موجودی <span>{{ coins.symbol }}</span>
					</p>
					<p>0</p>
				</div>
			</div>
		</div>
		<vs-divider />
		<div class="flex flex-col items-center">
			<div>
				<qr-code
					text="16sAxN2jf2RutFdyyWMn4ktFn2PgfbszaR"
					:size="200"
					class="pl-5"
				/>
			</div>
			<div class="pb-5">
				<input-with-copy
					placeholder="آدرس ولت"
					ref-code="16sAxN2jf2RutFdyyWMn4ktFn2PgfbszaR"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import InputWithCopy from "../../../global/inputs/InputWithCopy.vue";
import VueQRCodeComponent from "vue-qrcode-component";

export default {
	components: {
		InputWithCopy,
		"qr-code": VueQRCodeComponent
	},
	props: {
		coins: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style></style>
