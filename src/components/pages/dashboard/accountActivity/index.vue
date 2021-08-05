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
				<div>
					<p class="text-center text-bold text-gray-400 text-sm">
						<account-activity-table :user-activities="userActivities" />
					</p>
				</div>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../../global/cards/CardWithHeader.vue";
import AccountActivityTable from "./accountActivityTable.vue";
export default {
	components: {
		CardWithHeader,
		AccountActivityTable,
	},
	data() {
		return {
			user: {
				email: "Nimatorabi@rocketmail.com",
				refCode: "ID12345678",
				password: 123456789,
			},
			twoFactorAuth: false,
		};
	},
	computed: {
		userActivities() {
			return this.$store.state.userActivity;
		},
	},
	mounted() {
		this.userActivity();
	},
	methods: {
		userActivity() {
			this.$store.dispatch("userActivities");
		},
	},
};
</script>

<style lang="scss" scoped>
.width-50 {
	width: 50%;
}
</style>
