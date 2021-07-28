<template>
	<div class="w-11/12 lg:w-4/12 mx-auto center rounded-md p-8">
		<card-with-header>
			<template #header>
				<p class="text-center font-bold text-lg">
					{{ $t("pages.auth.signUp.title") }}
				</p>
			</template>
			<template #body>
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
							v-model="user.email"
							class="min-w-full"
							:label="$t('pages.auth.signUp.userName')"
							:placeholder="$t('pages.auth.signUp.userNamePlaceHolder')"
						/>
						<span class="text-danger text-xs">{{ errors[0] }}</span>
					</ValidationProvider>
					<ValidationProvider
						name="password"
						rules="required"
						v-slot="{ errors }"
					>
						<vs-tooltip :text="$t('pages.auth.signUp.rules')" position="bottom">
							<vs-input
								v-model="user.password"
								type="password"
								class="min-w-full"
								:label="$t('pages.auth.signUp.password')"
								:placeholder="$t('pages.auth.signUp.passwordPlaceHodler')"
							/>
						</vs-tooltip>
						<span class="text-danger text-xs">{{ errors[0] }}</span>
						<password-meter :password="user.password" />
					</ValidationProvider>
					<ValidationProvider
						name="confirm password"
						rules="required|confirmed:password"
						v-slot="{ errors }"
					>
						<vs-tooltip :text="$t('pages.auth.signUp.rules')" position="bottom">
							<vs-input
								v-model="user.reapetPassword"
								class="min-w-full"
								type="password"
								:label="$t('pages.auth.signUp.repeatPassword')"
								:placeholder="$t('pages.auth.signUp.repeatPasswordPlaceHodler')"
							/>
						</vs-tooltip>
						<span class="text-danger text-xs">{{ errors[0] }}</span>
						<password-meter :password="user.reapetPassword" />
					</ValidationProvider>
					<vs-input
						v-model="user.refid"
						class="min-w-full"
						:label="$t('pages.auth.signUp.refId')"
						:placeholder="$t('pages.auth.signUp.refIdPlaceHolder')"
					/>
					<div class="flex items-center justify-start mt-3">
						<vs-checkbox v-model="user.acceptRules" />
						<p>
							{{ $t("pages.auth.signUp.faq.start") }}
							<strong class="text-blue-400 underline">
								{{ $t("pages.auth.signUp.faq.middle") }}
							</strong>
							{{ $t("pages.auth.signUp.faq.end") }}
						</p>
					</div>
					<div>
						<vs-button
							:disabled="invalid || !user.acceptRules"
							class="w-full mt-5"
							type="gradient"
							@click.prevent="registerAccount"
						>
							{{ $t("pages.auth.signUp.submit") }}
						</vs-button>
					</div>
				</ValidationObserver>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import passwordMeter from "vue-simple-password-meter";
import CardWithHeader from "../../components/global/cards/CardWithHeader.vue";
export default {
	components: {
		CardWithHeader,
		passwordMeter,
	},
	data() {
		return {
			user: {
				email: null,
				password: null,
				reapetPassword: null,
				acceptRules: false,
				refid: null,
			},
		};
	},
	methods: {
		registerAccount() {
			axios
				.post("/barong/identity/users", {
					email: this.user.email,
					password: this.user.password,
				})
				.then(res => {
					this.$router.push("/auth/login");
				});
		},
	},
};
</script>

<style></style>
