<template>
	<div class="w-8/12 mx-auto shadow-lg rounded-md">
		<vs-tabs alignment="left">
			<vs-tab label="تاریخچه تراکنش های بانکی">
				<bank-history />
			</vs-tab>
			<vs-tab label="تاریخچه تراکنش های رمزارز">
				<crypto-history />
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import BankHistory from "./BankHistory.vue";
import CryptoHistory from "./CryptoHistory.vue";
export default {
	components: { BankHistory, CryptoHistory }
};
</script>

<style></style>

BankHistory
