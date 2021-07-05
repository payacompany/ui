<template>
	<div>
		<card-with-header>
			<template #header>
				<p class="text-xl font-bold">حساب کاربری شما</p>
			</template>
			<template #body>
				<div class="flex flex-row justify-between w-full">
					<div class="width-50 ml-2 d-flex justify-between">
						<p class="text-xl font-bold">
							{{ user.email }}
						</p>
						<p class="text-xl font-bold">
							{{ user.refCode }}
						</p>
						<div class="flex">
							<div class="flex justify-between items-baseline w-6/12 ml-2">
								<p>
									{{ user.password }}
								</p>
								<div class="mt-3">
									<vs-button size="small">
										تغییر گذرواژه
									</vs-button>
								</div>
							</div>
							<div class="flex justify-between w-6/12 mt-4 items-center mr-2">
								<p>
									شناسایی دو عاملی:
									<span> ({{ twoFactorAuth ? "فعال" : "غیرفعال" }}) </span>
								</p>
								<vs-switch v-model="twoFactorAuth" color="dark" />
							</div>
						</div>
						<input-with-copy />
					</div>
					<div class="width-50 mr-2">
						test
					</div>
				</div>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../../global/cards/CardWithHeader.vue";
import InputWithCopy from "../../../global/inputs/InputWithCopy.vue";
export default {
	components: {
		CardWithHeader,
		InputWithCopy
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
