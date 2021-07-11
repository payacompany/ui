<template>
	<div>
		<div
			v-for="(operation, index) in $t('pages.profile.xs')"
			:key="index"
			class="py-3 border-b flex flex-row justify-between px-3"
		>
			<p>
				{{ operation.title }}
			</p>
			<p>
				<span class="material-icons">
					chevron_left
				</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
