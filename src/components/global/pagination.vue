<template>
	<div>
		<vs-pagination v-model="innerValue" :total="totalPage" />
	</div>
</template>
<script>
export default {
	props: {
		value: {
			type: [String, Number],
			required: true,
		},
		totalPage: {
			type: [String, Number],
			required: true,
		},
	},
	computed: {
		innerValue: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			},
		},
	},
};
</script>
