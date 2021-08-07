<template>
	<div>
		<card-with-header>
			<template #header>
				<div class="flex justify-between items-baseline">
					<p class="text-xl font-bold">
						{{ $t("pages.profile.AccountActivity.title") }}
					</p>
					<vs-button
						size="small"
						type="border"
						:to="{ path: '/profile/account-activity' }"
					>
						{{ $t("attribute.moreInfo") }}
					</vs-button>
				</div>
			</template>
			<template #body>
				{{ userActivities }}
				<div>
					<p class="text-center text-bold text-gray-400 text-sm">
						<account-activity-table :user-activities="userActivities" />
						<pagination v-model="page" :total-page="totalPage" class="mt-4" />
					</p>
				</div>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../../global/cards/CardWithHeader.vue";
import Pagination from "../../../global/pagination.vue";
import AccountActivityTable from "./accountActivityTable.vue";
export default {
	components: {
		CardWithHeader,
		AccountActivityTable,
		Pagination,
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
		userActivities() {
			return this.$store.state.userActivity;
		},
	},
	watch: {
		page() {
			this.userActivity();
		},
	},
	mounted() {
		const cookie = this.$cookies.get("_barong_session", { httpOnly: true });
		this.$cookies.set("_barong_session", cookie, { httpOnly: true });
		axios.defaults.withCredentials = true;
		this.userActivity();
	},
	methods: {
		userActivity() {
			this.$store.dispatch("userActivities", {
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
