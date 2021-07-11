<template>
	<div>
		<card-with-header>
			<template #header>
				<p class="text-xl font-bold">
					{{ $t("pages.profile.AccountActivity.title") }}
				</p>
			</template>
			<template #body>
				<div>
					<p class="text-center text-bold text-gray-400 text-sm">
						<account-activity-table />
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
		AccountActivityTable
	},
	data () {
		return {
			user: {
				email: "Nimatorabi@rocketmail.com",
				refCode: "ID12345678",
				password: 123456789
			},
			twoFactorAuth: false
		};
	}
};
</script>

<style lang="scss" scoped>
.width-50 {
	width: 50%;
}
</style>
