<template>
	<div class="w-11/12 md:w-8/12 lg:w-10/12 mx-auto mt-5">
		<card-with-header>
			<template #header>
				<p class="text-xl font-bold">
					{{ $t("pages.profile.ApiManagement.title") }}
				</p>
			</template>
			<template #body>
				<div>
					<p class="text-center text-bold text-gray-400 text-sm">
						{{ $t("pages.profile.ApiManagement.description") }}
					</p>
				</div>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../../../components/global/cards/CardWithHeader.vue";
export default {
	components: {
		CardWithHeader
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
