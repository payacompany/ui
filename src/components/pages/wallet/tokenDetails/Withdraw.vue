<template>
	<div class="flex flex-col w-full">
		<withdraw-rules />
		<div class="w-min-full mt-2">
			<vs-input
				v-model="deposit.address"
				class="min-w-full mb-3"
				label-placeholder="آدرس والت مبدا را وارد کنید."
				description-text="لطفا اطلاعات را بادقت تمام وارد نمایید"
			/>
			<vs-input
				v-model="deposit.value"
				class="min-w-full"
				label-placeholder="مقدار "
				description-text="موجودی : 0.0024045"
			/>
			<div class="flex justify-end">
				<vs-button size="small" class="mb-3" type="border">
					برداشت کل موجودی
				</vs-button>
			</div>
			<div class="mb-3">
				<vs-button class="w-full">
					برداشت از حساب شما
				</vs-button>
			</div>
		</div>
	</div>
</template>

<script>
import WithdrawRules from "./WithdrawRules.vue";
export default {
	components: { WithdrawRules },
	data () {
		return {
			deposit: {}
		};
	}
};
</script>

<style></style>
