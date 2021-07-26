<template>
	<div
		class="
			shadow-lg
			w-3/12
			text-center
			py-2
			px-2
			mx-1
			rounded-md
			bg-gray-100
			cursor-pointer
			hover:bg-gray-200 hover:transition
			ease-in
			font-bold
			text-xs
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
			required: true,
		},
	},
};
</script>

<style></style>
