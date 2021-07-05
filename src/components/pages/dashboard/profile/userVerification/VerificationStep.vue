<template>
	<div class="py-3">
		<p>
			{{ step.name }}
		</p>
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

<style></style>
