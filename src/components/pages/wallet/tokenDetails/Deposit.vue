<template>
	<div>
		<div class="flex flex-row justify-start">
			<div class="w-2/12">
				<img :src="coins.logo" alt="" />
			</div>
			<div class="w-9/12 flex flex-row justify-between">
				<div class="text-justify">
					<p>{{ $t("pages.wallet.lockedBalance") }}</p>
					<p>0</p>
				</div>
				<div>
					<p>
						{{ $t("pages.wallet.balance") }}
						<span>{{ coins.symbol }}</span>
					</p>
					<p>0</p>
				</div>
			</div>
		</div>
		<vs-divider />
		<deposit-rules class="mb-5" />
		<div class="flex flex-col items-center">
			<div>
				<qr-code
					text="16sAxN2jf2RutFdyyWMn4ktFn2PgfbszaR"
					:size="200"
					class="pl-5"
				/>
			</div>
			<div class="pb-5">
				<span class="font-bold text-xs text-gray-500">
					{{ $t("pages.wallet.deposit.walletAddress") }}
				</span>
				<input-with-copy ref-code="16sAxN2jf2RutFdyyWMn4ktFn2PgfbszaR" />
			</div>
		</div>
	</div>
</template>

<script>
import InputWithCopy from "../../../global/inputs/InputWithCopy.vue";
import VueQRCodeComponent from "vue-qrcode-component";
import DepositRules from "./DepositRules.vue";
export default {
	components: {
		InputWithCopy,
		DepositRules,
		"qr-code": VueQRCodeComponent,
	},
	props: {
		coins: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style></style>
