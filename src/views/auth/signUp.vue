<template>
	<div class="w-11/12 lg:w-4/12 mx-auto center rounded-md p-8">
		<card-with-header>
			<template #header>
				<p class="text-center font-bold text-lg">
					{{ $t("pages.auth.signUp.title") }}
				</p>
			</template>
			<template #body>
				<vs-input
					v-model="user.username"
					class="min-w-full"
					:label="$t('pages.auth.signUp.userName')"
					:placeholder="$t('pages.auth.signUp.userNamePlaceHolder')"
				/>
				<vs-input
					v-model="user.password"
					class="min-w-full"
					:label="$t('pages.auth.signUp.password')"
					:placeholder="$t('pages.auth.signUp.passwordPlaceHodler')"
				/>
				<vs-input
					v-model="user.reapetPassword"
					class="min-w-full"
					:label="$t('pages.auth.signUp.repeatPassword')"
					:placeholder="$t('pages.auth.signUp.repeatPasswordPlaceHodler')"
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
					<vs-button class="w-full mt-5" type="gradient">
						{{ $t("pages.auth.signUp.submit") }}
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
		CardWithHeader
	},
	data () {
		return {
			user: {
				username: null,
				password: null,
				reapetPassword: null,
				acceptRules: false
			}
		};
	}
};
</script>

<style></style>
