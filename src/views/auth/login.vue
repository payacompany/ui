<template>
	<div class="w-11/12 lg:w-4/12 mx-auto center rounded-md p-8">
		<card-with-header>
			<template #header>
				<p class="text-center font-bold text-lg">
					{{ $t("pages.auth.login.title") }}
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
							v-model="user.username"
							class="min-w-full"
							:label="$t('pages.auth.login.userName')"
							:placeholder="$t('pages.auth.login.userNamePlaceHolder')"
						/>
						<span class="text-danger text-xs">{{ errors[0] }}</span>
					</ValidationProvider>
					<ValidationProvider
						name="password"
						rules="required"
						v-slot="{ errors }"
					>
						<vs-input
							v-model="user.password"
							class="min-w-full"
							type="password"
							:label="$t('pages.auth.login.password')"
							:placeholder="$t('pages.auth.login.passwordPlaceHodler')"
						/>
						<span class="text-danger text-xs">{{ errors[0] }}</span>
					</ValidationProvider>
					<div class="flex items-center justify-start mt-3">
						<vs-checkbox v-model="user.rememberMe" />
						<p class="text-sm">
							{{ $t("pages.auth.login.rememberMe") }}
						</p>
					</div>
					<div>
						<vs-button
							class="w-full mt-5"
							type="gradient"
							:disabled="invalid"
							@click.prevent="loginAccount"
						>
							{{ $t("pages.auth.login.submit") }}
						</vs-button>
					</div>
				</ValidationObserver>
				<vs-divider class="pt-1" />
				<p
					@click="$router.push('/auth/forget-password')"
					class="
						text-sm text-gray-500 text-center
						cursor-pointer
						font-bold
						hover:text-blue-700
						transition-300
						ease-in-out
					"
				>
					{{ $t("pages.auth.login.forgetPass") }}
				</p>
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
			user: {
				username: "admin@barong.io",
				password: "0lDHd9ufs9t@",
				rememberMe: false,
			},
		};
	},
	methods: {
		loginAccount() {
			this.$store
				.dispatch("auth/login", {
					email: this.user.username,
					password: this.user.password,
				})
				.then(res => {
					this.$router.push("/");
				});
		},
	},
};
</script>

<style></style>
