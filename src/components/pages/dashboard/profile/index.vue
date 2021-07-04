<template>
	<div>
		<card-with-header>
			<template #header>
				<p class="text-xl font-bold">حساب کاربری شما</p>
			</template>
			<template #body>
				<div class="flex flex-row justify-between w-100">
					<div class="w-100 d-flex justify-between">
						<p class="text-xl font-bold">
							{{ user.email }}
						</p>
						<p class="text-xl font-bold">
							{{ user.refCode }}
						</p>
						<div class="flex justify-between items-baseline w-100">
							<p>
								{{ user.password }}
							</p>
							<div class="mt-3">
								<vs-button size="small">
									تغییر گذرواژه
								</vs-button>
							</div>
						</div>
					</div>
					<div class="w-100">
						test
					</div>
				</div>
			</template>
		</card-with-header>
	</div>
</template>

<script>
import CardWithHeader from "../../../global/cards/CardWithHeader.vue";
export default {
	components: {
		CardWithHeader
	},
	data () {
		return {
			user: {
				email: "Nimatorabi@rocketmail.com",
				refCode: "ID12345678",
				password: 123456789
			}
		};
	}
};
</script>

<style></style>
