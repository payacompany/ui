<template>
	<div>
		<card-with-header class="hidden md:block">
			<template #header>
				<p class="text-xl font-bold">
					{{ $t("pages.profile.title") }}
				</p>
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
								{{ $t("pages.profile.twoAuth.title") }}
								<span>
									({{
										twoFactorAuth
											? $t("pages.profile.twoAuth.active")
											: $t("pages.profile.twoAuth.deactive")
									}})
								</span>
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
		<profile-xs />
	</div>
</template>

<script>
import ProfileXs from "./xs/index.vue";
import CardWithHeader from "../../../global/cards/CardWithHeader.vue";
import InputWithCopy from "../../../global/inputs/InputWithCopy.vue";
import ChangePassModal from "./changePassModal.vue";
import UserVerification from "./userVerification/index.vue";
export default {
	components: {
		CardWithHeader,
		InputWithCopy,
		UserVerification,
		ChangePassModal,
		ProfileXs
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
