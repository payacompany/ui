<template>
	<div>
		<coin-info>
			<template #details>
				<p class="font-bold text-sm">
					برای واریز به حساب کاربری خود لازم است آدرس والت خود را به عنوان مقصد
					استفاده نمایید.
				</p>
				<input-with-copy />
			</template>
		</coin-info>
	</div>
</template>

<script>
import InputWithCopy from "../../../components/global/inputs/InputWithCopy.vue";
import CoinInfo from "../../../components/pages/wallet/xs/id/coinInfo.vue";

export default {
	components: { CoinInfo, InputWithCopy }
};
</script>

<style></style>
