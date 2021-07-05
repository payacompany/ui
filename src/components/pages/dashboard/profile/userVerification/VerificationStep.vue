<template>
	<div class="py-3 flex justify-between items-center">
		<p class="text-bold" :class="[step.isCompleted ? 'text-gray-400' : '']">
			<span> {{ index + 1 }}. </span>
			{{ step.name }}
		</p>
		<div>
			<vs-button v-if="!step.isCompleted" size="small">
				اعتبارسنجی
			</vs-button>
			<p v-else class="text-xs text-success">
				اطلاعات تایید شده
				<span class="material-icons">
					check
				</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		index: {
			type: String,
			default: "1"
		},
		step: {
			type: Object,
			default: () => {}
		}
	}
};
</script>

<style lang="scss" scoped>
.material-icons {
	font-size: 16px;
}
</style>
