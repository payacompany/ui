<template>
	<div
		class="
			shadow-lg
			w-2/12
			text-center
			p-2
			rounded-md
			bg-gray-100
			cursor-pointer
			hover:bg-gray-200 hover:transition
			ease-in
			font-bold
			text-sm
			duration-100
		"
	>
		{{ range }}%
	</div>
</template>

<script>
export default {
	props: {
		range: {
			type: Number,
			default: 0,
			required: true
		}
	}
};
</script>

<style></style>
