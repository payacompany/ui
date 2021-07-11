<template>
	<div class="block md:hidden overflow-scroll">
		<my-account />
		<profile-operations />
		<div class="flex justify-center mt-3">
			<input-with-copy />
		</div>
	</div>
</template>

<script>
import InputWithCopy from "../../../../global/inputs/InputWithCopy.vue";
import myAccount from "./myAccount.vue";
import ProfileOperations from "./profileOperations.vue";
export default {
	components: { myAccount, ProfileOperations, InputWithCopy }
};
</script>

<style></style>
