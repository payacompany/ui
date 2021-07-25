<template>
	<div>
		<input :type="isVisible ? 'password' : 'text'" v-model="value" />
		<button @click="toggleVisibility" class="text-gray-400">
			<span v-if="isVisible">
				<span class="material-icons"> visibility </span>
			</span>
			<span v-else>
				<span class="material-icons"> visibility_off </span>
			</span>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: [String, Number],
			default: "",
		},
	},
	data() {
		return {
			isVisible: true,
		};
	},
	methods: {
		toggleVisibility() {
			this.isVisible = !this.isVisible;
		},
	},
};
</script>

<style lang="scss" scoped>
div {
	padding: 0.3rem 1.2rem 0.3rem 0.8rem;
	border-radius: 5px;
	width: 400px;
	background-color: rgba(235, 235, 235, 0.411);
	display: flex;
	align-items: center;
	justify-content: space-between;
	button {
		background: border-box !important;
		margin-top: 0.3rem;
	}

	input {
		background: border-box !important;
	}
}
</style>
