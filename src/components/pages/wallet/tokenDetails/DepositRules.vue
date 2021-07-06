<template>
	<div class="flex flex-col border border-gray-300 rounded-sm">
		<div
			v-for="(rule, index) in DepositRules"
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
				{{ rule.value }}
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
					title: "بیشترین",
					value: "100.00000000"
				},
				{
					title: "کمترین",
					value: "0.00000001"
				},
				{
					title: "زمان واریز",
					value: "کمتر از یک ساعت"
				},
				{
					title: "کارمزد",
					value: "0%"
				},
				{
					title: "کارمزد ثابت",
					value: "0"
				},
				{
					title: "حداکثر کارمزد",
					value: "0"
				},
				{
					title: "محدودیت",
					value: "تراکنش های ارسالی از جایزه ماینینگ پشتیبانی نمیشود"
				}
			]
		};
	}
};
</script>

<style></style>
