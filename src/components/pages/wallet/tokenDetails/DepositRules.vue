<template>
	<div class="flex flex-col border border-gray-300 rounded-sm">
		<div
			v-for="(rule, index) in $t('pages.wallet.deposit.rules')"
			:key="index"
			class="
				flex flex-row
				justify-between
                odd:bg-gray-100
				px-3
				py-2
				border-b border-gray-300
				last:border-0
			"
		>
			<p>
				{{ rule.title }}
			</p>
			<p>
				{{ DepositRules[index].value }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			DepositRules: [
				{
					value: "100.00000000"
				},
				{
					value: "0.00000001"
				},
				{
					value: "کمتر از یک ساعت"
				},
				{
					value: "0%"
				},
				{
					value: "0"
				},
				{
					value: "0"
				},
				{
					value: "تراکنش های ارسالی از جایزه ماینینگ پشتیبانی نمیشود"
				}
			]
		};
	}
};
</script>

<style></style>
