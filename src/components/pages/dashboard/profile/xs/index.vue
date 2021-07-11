<template>
	<div class="block md:hidden overflow-scroll">
		<my-account />
		<profile-operations />
	</div>
</template>

<script>
import myAccount from "./myAccount.vue";
import ProfileOperations from "./profileOperations.vue";
export default {
	components: { myAccount, ProfileOperations }
};
</script>

<style></style>
