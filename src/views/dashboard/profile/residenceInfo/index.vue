<template>
	<div
		class="
			shadow-xl
			w-11/12
			md:w-8/12
			lg:w-5/12
			xl:w-3/12
			center
			rounded-md
			py-8
		"
	>
		<p class="text-bold text-xl text-center px-8">
			{{ $t("pages.profile.verifiyStep.residenceInfoVerification.title") }}
		</p>
		<vs-divider />
		<div class="px-8 mt-2">
			<div class="flex flex-col justify-between">
				<vs-input
					v-model="residence.country"
					class="min-w-full"
					:label-placeholder="
						$t('pages.profile.verifiyStep.residenceInfoVerification.country')
					"
				/>
				<div class="mt-2">
					<vs-input
						v-model="residence.city"
						class="min-w-full"
						:label-placeholder="
							$t('pages.profile.verifiyStep.residenceInfoVerification.city')
						"
					/>
				</div>
				<div class="mt-2">
					<vs-input
						v-model="residence.address"
						class="min-w-full"
						:label-placeholder="
							$t('pages.profile.verifiyStep.residenceInfoVerification.address')
						"
					/>
				</div>
				<div class="mt-2">
					<vs-input
						v-model="residence.postcode"
						class="min-w-full"
						:label-placeholder="
							$t(
								'pages.profile.verifiyStep.residenceInfoVerification.postalCode'
							)
						"
					/>
				</div>
			</div>
			<div class="mt-2">
				<input type="file" @change="imageUpload" />
			</div>
		</div>
		<div class="mt-5 px-8">
			<vs-button class="w-full" @click.prevent="identifyUser">
				{{ $t("pages.profile.verifiyStep.residenceInfoVerification.submit") }}
			</vs-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			residence: {
				country: null,
				city: null,
				address: null,
				docs: null,
			},
		};
	},
	methods: {
		imageUpload(e) {
			console.log("e", e);
			console.log(e.target.files);
			this.residence.docs = e.target.files;
			console.log(this.residence.docs, "e");
		},
		identifyUser() {
			const payload = new FormData();
			payload.append("country", this.residence.country);
			payload.append("city", this.residence.city);
			payload.append("address", this.residence.address);
			payload.append("postcode", this.residence.postcode);
			payload.append("upload", this.residence.docs);
			this.$store.dispatch("profile/identifyUser", this.residence);
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	// .vs-input--input.normal {
	// 	width: 21.5vw;
	// }
}
</style>
