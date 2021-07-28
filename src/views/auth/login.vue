<template>
	<div class="w-11/12 lg:w-4/12 mx-auto center rounded-md p-8">
		<card-with-header>
			<template #header>
				<p class="text-center font-bold text-lg">
					{{ $t("pages.auth.login.title") }}
				</p>
			</template>
			<template #body>
				<vs-input
					v-model="user.username"
					class="min-w-full"
					:label="$t('pages.auth.login.userName')"
					:placeholder="$t('pages.auth.login.userNamePlaceHolder')"
				/>
				<vs-input
					v-model="user.password"
					class="min-w-full"
					:label="$t('pages.auth.login.password')"
					:placeholder="$t('pages.auth.login.passwordPlaceHodler')"
				/>
				<div>
					<vs-button
						class="w-full mt-5"
						type="gradient"
						@click.prevent="loginAccount"
					>
						{{ $t("pages.auth.login.submit") }}
					</vs-button>
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
			user: {
				username: null,
				password: null,
			},
		};
	},
	methods: {
		loginAccount() {
			axios
				.post("/barong/identity/sessions", {
					email: this.user.username,
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
