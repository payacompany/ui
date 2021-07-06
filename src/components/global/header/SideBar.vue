<template lang="html">
	<div id="parentx">
		<span class="material-icons cursor-pointer" @click="active = !active">
			menu
		</span>
		<vs-sidebar
			v-model="active"
			:hidden-background="true"
			parent="body"
			default-index="1"
			color="primary"
			class="text-center"
			spacer
		>
			<div slot="header" class="header-sidebar">
				<h4>جایگاه لوگو</h4>
			</div>

			<vs-sidebar-item index="1" icon="question_answer">
				پروفایل شما
			</vs-sidebar-item>
			<vs-divider />
			<vs-sidebar-item index="2" icon="gavel">
				اتاق معاملات
			</vs-sidebar-item>

			<vs-sidebar-item index="3" to="/wallet">
				کیف پول
			</vs-sidebar-item>
			<vs-sidebar-item index="4" icon="account_box">
				سفارشات
			</vs-sidebar-item>
			<vs-sidebar-item index="5" icon="account_box">
				سابقه
			</vs-sidebar-item>

			<div slot="footer" class="text-center w-full">
				<vs-button
					icon="reply"
					color="danger"
					class="text-center w-100 flex justify-center"
					type="flat"
				>
					خروج از حساب کاربری
				</vs-button>
			</div>
		</vs-sidebar>
	</div>
</template>

<script>
export default {
	data: () => ({
		active: false
	})
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-button-danger.vs-button-flat {
		width: 100%;
	}
}
</style>
