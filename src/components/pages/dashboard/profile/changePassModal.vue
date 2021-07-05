<template lang="html">
	<div class="centerx">
		<vs-button
			size="small"
			color="primary"
			type="filled"
			@click="popupActivo2 = true"
		>
			تغییر گذرواژه
		</vs-button>
		<vs-popup title="تغییر گذرواژه" :active.sync="popupActivo2">
			<vs-input
				v-model="user.password"
				class="min-w-full mb-3"
				placeholder="رمز عبور فعلی شما"
			/>
			<vs-input
				v-model="user.password"
				class="min-w-full mb-3"
				placeholder="رمز عبور جدید شما"
			/>
			<vs-input
				v-model="user.password"
				class="min-w-full"
				placeholder="تکرار رمز عبور جدید شما"
			/>
			<div class="mt-3">
				<vs-button class="w-full">
					تغییر گذرواژه
				</vs-button>
			</div>
		</vs-popup>
	</div>
</template>

<script>
export default {
	data () {
		return {
			user: {},
			popupActivo2: false,
			popupActivo3: false
		};
	}
};
</script>
