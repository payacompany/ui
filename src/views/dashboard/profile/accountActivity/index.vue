<template>
	<div class="w-11/12 md:w-8/12 lg:w-8/12 mx-auto mt-5">
		<card-with-header>
			<template #header>
				<div class="flex justify-between items-baseline">
					<p class="text-xl font-bold">
						{{ $t("pages.profile.AccountActivity.title") }}
					</p>
				</div>
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
import CardWithHeader from "../../../../components/global/cards/CardWithHeader.vue";
import AccountActivityTable from "../../../../components/pages/dashboard/accountActivity/accountActivityTable.vue";
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
