<template>
	<div class="w-11/12 lg:w-8/12 mx-auto center rounded-md p-8">
		<card-with-header :has-header="false">
			<template #body>
				<div class="flex flex-row justify-between items-center py-3">
					<div class="w-full md:w-6/12 mx-2">
						<p class="text-center font-bold text-lg">
							{{ $t("pages.auth.forgetPassword.title") }}
						</p>
						<ValidationObserver
							v-slot="{ invalid }"
							tag="form"
							@submit.prevent="onSubmit"
						>
							<ValidationProvider
								name="E-mail"
								rules="required|email"
								v-slot="{ errors }"
							>
								<vs-input
									v-model="user.username"
									class="min-w-full"
									:label="$t('pages.auth.forgetPassword.userName')"
									:placeholder="
										$t('pages.auth.forgetPassword.userNamePlaceHolder')
									"
								/>
								<span class="text-danger text-xs">{{ errors[0] }}</span>
							</ValidationProvider>
							<div>
								<vs-button
									class="w-full mt-5"
									type="gradient"
									:disabled="invalid"
									@click.prevent="forgetPass"
								>
									{{ $t("pages.auth.forgetPassword.submit") }}
								</vs-button>
								<vs-popup
									title="درخواست فراموشی رمز عبور"
									:active.sync="isActive"
								>
									<p>
										دوست گرامی ، لطفا با مراجعه به ایمیل خود و کلیک بر روی دکمه
										Reset رمز عبور خود را تغییر دهید.
									</p>
								</vs-popup>
							</div>
						</ValidationObserver>
						<vs-divider class="pt-1" />
						<p
							@click="$router.push('/auth/login')"
							class="
								text-sm text-gray-500 text-center
								cursor-pointer
								font-bold
								hover:text-blue-700
								transition-300
								ease-in-out
							"
						>
							{{ $t("pages.auth.forgetPassword.rememberPassword") }}
						</p>
					</div>
					<div class="hidden md:flex w-5/12 mx-2">
						<img
							src="../../assets/img/forget-password.png"
							class="object-cover"
							alt=""
						/>
					</div>
				</div>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../components/global/cards/CardWithHeader.vue";
export default {
	components: {
		CardWithHeader,
	},
	data() {
		return {
			isActive: false,
			user: {
				username: "nimatorabiv@gmail.com",
			},
		};
	},
	methods: {
		forgetPass() {
			this.$store
				.dispatch("auth/forgetpassword", {
					email: this.user.username,
				})
				.then(res => {
					this.isActive = true;
				});
		},
	},
};
</script>

<style></style>
