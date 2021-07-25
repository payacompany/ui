<template>
	<div>
		<coin-info>
			<template #details>
				<p class="font-bold text-sm">
					برای برداشت از حساب کاربری باید شناسایی دو عاملی خود را فعال کرده
					باشید.
				</p>
				<vs-button class="mt-2" type="gradient">
					فعال سازی
				</vs-button>
			</template>
		</coin-info>
	</div>
</template>

<script>
import CoinInfo from "../../../components/pages/wallet/xs/id/coinInfo.vue";

export default {
	components: { CoinInfo }
};
</script>

<style></style>
