<template>
	<div class="block md:hidden overflow-hidden">
		<my-account />
		<profile-operations />
		<div class="flex justify-between items-center px-3">
			<p>{{ $t("pages.profile.language") }}</p>
			<language-switcher class="pt-3" />
		</div>
		<div class="flex justify-center mt-3">
			<input-with-copy />
		</div>
	</div>
</template>

<script>
import LanguageSwitcher from "../../../../global/header/LanguageSwitcher.vue";
import InputWithCopy from "../../../../global/inputs/InputWithCopy.vue";
import myAccount from "./myAccount.vue";
import ProfileOperations from "./profileOperations.vue";
export default {
	components: { myAccount, ProfileOperations, InputWithCopy, LanguageSwitcher },
};
</script>

<style></style>
