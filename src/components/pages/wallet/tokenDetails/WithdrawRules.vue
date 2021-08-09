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
				{{ depositRules[index].value }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		WithdrawRules: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style></style>
