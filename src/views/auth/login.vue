<template>
	<div class="w-4/12 mx-auto center rounded-md p-8">
		<card-with-header>
			<template #header>
				<p class="text-center font-bold text-lg">
					ورود به حساب کاربری
				</p>
			</template>
			<template #body>
				<vs-input
					v-model="user.username"
					class="min-w-full"
					label="نام کاربری"
					placeholder="نام کاربری خود را اینجا وارد نمایید"
				/>
				<vs-input
					v-model="user.username"
					class="min-w-full"
					label="رمز عبور"
					placeholder="رمز عبور خود را اینجا وارد نمایید"
				/>
				<div>
					<vs-button class="w-full mt-5" type="gradient">
						ورود به حساب کاربری
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
			user: {}
		};
	}
};
</script>

<style></style>
