<template>
	<div>
		<card-with-header>
			<template #header>
				<div class="flex justify-between items-baseline">
					<p class="text-xl font-bold">
						{{ $t("pages.profile.ApiManagement.title") }}
					</p>
					<vs-button
						size="small"
						type="border"
						:to="{ path: '/profile/api-management' }"
					>
						{{ $t("attribute.moreInfo") }}
					</vs-button>
				</div>
			</template>
			<template #body>
				<div v-if="!is2faEnabled">
					<p class="text-center text-bold text-gray-400 text-sm">
						{{ $t("pages.profile.ApiManagement.description") }}
					</p>
				</div>
				<div v-else>
					<api-management-table :userApies="userAPI" />
					<pagination v-model="page" :total-page="totalPage" class="mt-4" />
				</div>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../../global/cards/CardWithHeader.vue";
import Pagination from "../../../global/pagination.vue";
import ApiManagementTable from "./apiManagementTable.vue";
export default {
	components: {
		CardWithHeader,
		Pagination,
		ApiManagementTable,
	},
	data() {
		return {
			user: {
				email: "Nimatorabi@rocketmail.com",
				refCode: "ID12345678",
				password: 123456789,
			},
			page: 1,
			limit: 10,
			totalPage: 10,
			twoFactorAuth: false,
		};
	},
	computed: {
		userAPI() {
			return this.$store.state.userAPI;
		},
		is2faEnabled() {
			return this.$store.state.myProfile.otp;
		},
	},
	watch: {
		page() {
			this.userAPIManagement();
		},
	},
	mounted() {
		const cookie = this.$cookies.get("_barong_session", { httpOnly: true });
		this.$cookies.set("_barong_session", cookie, { httpOnly: true });
		axios.defaults.withCredentials = true;
		this.userAPIManagement();
	},
	methods: {
		userAPIManagement() {
			this.$store.dispatch("userAPIManagement", {
				page: this.page,
				limit: this.limit,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.width-50 {
	width: 50%;
}
</style>
