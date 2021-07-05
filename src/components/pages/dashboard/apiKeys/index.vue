<template>
	<div>
		<card-with-header>
			<template #header>
				<p class="text-xl font-bold">مدیریت Api ها</p>
			</template>
			<template #body> dsad</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../../global/cards/CardWithHeader.vue";
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
