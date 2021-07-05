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
							<div class="flex justify-between items-baseline w-full ml-2">
								<p>
									{{ user.password }}
								</p>
								<div class="mt-3">
									<change-pass-modal ref="changePassModal" />
								</div>
							</div>
						</div>
						<div
							class="flex justify-between w-full mt-8 items-center"
							@click="$router.push({ name: '2fa' })"
						>
							<p>
								شناسایی دو عاملی:
								<span> ({{ twoFactorAuth ? "فعال" : "غیرفعال" }}) </span>
							</p>
							<vs-switch
								v-model="twoFactorAuth"
								disabled
								color="primary"
								class="ml-2"
							/>
						</div>
						<input-with-copy />
					</div>
					<div class="width-50 mr-2">
						<user-verification />
					</div>
				</div>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../../global/cards/CardWithHeader.vue";
import InputWithCopy from "../../../global/inputs/InputWithCopy.vue";
import ChangePassModal from "./changePassModal.vue";
import UserVerification from "./userVerification/index.vue";
export default {
	components: {
		CardWithHeader,
		InputWithCopy,
		UserVerification,
		ChangePassModal
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
