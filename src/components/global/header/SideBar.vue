<template lang="html">
	<div id="parentx">
		<span class="material-icons cursor-pointer" @click="active = !active">
			menu
		</span>
		<vs-sidebar
			v-model="active"
			parent="body"
			default-index="1"
			color="primary"
			class="text-center"
			:position-right="isRtl"
			spacer
		>
			<div slot="header" class="header-sidebar">
				<h4>جایگاه لوگو</h4>
			</div>

			<vs-sidebar-item index="1" icon="account_circle" to="/">
				{{ $t("nav.profile") }}
			</vs-sidebar-item>
			<vs-divider />
			<vs-sidebar-item index="2" icon="stacked_bar_chart" to="/trading">
				{{ $t("nav.trade") }}
			</vs-sidebar-item>

			<vs-sidebar-item index="3" icon="account_balance_wallet" to="/wallet">
				{{ $t("nav.wallet") }}
			</vs-sidebar-item>
			<vs-sidebar-item index="4" icon="receipt_long" to="/orders">
				{{ $t("nav.orders") }}
			</vs-sidebar-item>
			<vs-sidebar-item index="5" icon="history" to="/history">
				{{ $t("nav.history") }}
			</vs-sidebar-item>

			<div slot="footer" class="text-center w-full">
				<vs-button
					icon="logout"
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
import i18n from "@/i18n/index.js";

export default {
	data: () => ({
		active: false,
	}),
	mounted() {},
	computed: {
		isRtl() {
			return this.$i18n.locale === "Fa" ? false : true;
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-button-danger.vs-button-flat {
		width: 100%;
	}
}
</style>
