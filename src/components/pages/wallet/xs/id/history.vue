<template>
	<div class="bg-white shadow-lg mx-3">
		<vs-tabs alignment="center">
			<vs-tab label="تاریخچه برداشت">
				{{ $t("attribute.empty") }}
			</vs-tab>
			<vs-tab label="تاریخچه واریز">
				{{ $t("attribute.empty") }}
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-tabs--li {
		width: 50%;
	}
}
</style>
