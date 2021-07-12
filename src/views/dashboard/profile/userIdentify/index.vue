<template>
	<div class="shadow-xl w-11/12 md:w-6/12 center rounded-md py-8">
		<p class="text-bold text-xl text-center md:px-8">
			{{ $t("pages.profile.verifiyStep.userIdentifyVerification.title") }}
		</p>
		<vs-divider />
		<div class="px-8 mt-5">
			<div class="flex flex-col md:flex-row flex-wrap justify-between">
				<vs-input
					v-model="user.phone"
					class="min-w-full md:min-w-5/12"
					:label-placeholder="
						$t('pages.profile.verifiyStep.userIdentifyVerification.fname')
					"
				/>
				<vs-input
					v-model="user.phone"
					:label-placeholder="
						$t('pages.profile.verifiyStep.userIdentifyVerification.lname')
					"
					class="min-w-full md:min-w-5/12"
				/>
				<vs-input
					v-model="user.phone"
					:label-placeholder="
						$t(
							'pages.profile.verifiyStep.userIdentifyVerification.nationalCode'
						)
					"
					class="min-w-full md:min-w-5/12"
				/>
			</div>
			<div
				class="flex flex-col justify-center md:flex-row flex-wrap md:justify-between mt-5"
			>
				<div>
					<p class="text-sm font-bold mb-2">
						{{
							$t(
								"pages.profile.verifiyStep.userIdentifyVerification.idCardImage"
							)
						}}
					</p>
					<vs-upload
						limit="1"
						:text="
							$t(
								'pages.profile.verifiyStep.userIdentifyVerification.uploadImage'
							)
						"
						action="https://jsonplaceholder.typicode.com/posts/"
						@on-success="successUpload"
					/>
				</div>
				<div>
					<p class="text-sm font-bold mb-2">
						{{
							$t("pages.profile.verifiyStep.userIdentifyVerification.selfie")
						}}
					</p>
					<vs-upload
						limit="1"
						:text="
							$t(
								'pages.profile.verifiyStep.userIdentifyVerification.uploadImage'
							)
						"
						action="https://jsonplaceholder.typicode.com/posts/"
						@on-success="successUpload"
					/>
				</div>
			</div>
			<div class="mt-5">
				<vs-button class="w-full">
					{{ $t("pages.profile.verifiyStep.userIdentifyVerification.submit") }}
				</vs-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			user: {}
		};
	},
	methods: {
		successUpload () {}
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	.con-input-upload {
		margin: 0;
	}
}
</style>
