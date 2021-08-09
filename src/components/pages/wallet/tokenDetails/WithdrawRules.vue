<template>
	<div class="flex flex-col border border-gray-300 rounded-sm">
		{{ withdrawRules }}
		<div
			v-for="(rule, index) in $t('pages.wallet.withdraw.rules')"
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
				{{ withdrawRules[index].value ? withdrawRules[index].value : "نامشخص" }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		withdrawRules: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			// withdrawRules: [
			// 	{
			// 		title: "حداقل میزان برداشت به بیت کوین",
			// 		value: "0.00040000",
			// 	},
			// 	{
			// 		title: "حداکثر میزان برداشت به بیت کوین",
			// 		value: "3",
			// 	},
			// 	{
			// 		title: "کارمزد",
			// 		value: "0%",
			// 	},
			// 	{
			// 		title: "کارمزد ثابت",
			// 		value: "0",
			// 	},
			// 	{
			// 		title: "حداکثر کارمزد",
			// 		value: "0",
			// 	},
			// 	{
			// 		title: "باقی مانده روزانه",
			// 		value: "0.08783302",
			// 	},
			// ],
		};
	},
};
</script>

<style></style>
