<template>
	<div class="flex flex-row justify-between shadow-inner border-b py-2 px-3">
		<div>
			<p>{{ user.email }}</p>
			<p><span>آی دی شما:</span>{{ user.refCode }}</p>
		</div>
		<div>
			<vs-button color="primary" type="border">خروج</vs-button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			user: {
				email: "nimatorbaiv@gmail.com",
				refCode: "ID12345678"
			}
		};
	}
};
</script>

<style></style>
