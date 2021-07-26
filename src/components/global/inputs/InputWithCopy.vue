<template>
	<div class="flex justify-center md:justify-start flex-row w-full">
		<div v-if="!isRtl" class="flex flex-row">
			<vs-input
				id="ref-input"
				v-model="refCode"
				:disabled="disabled"
				style="border-radius: 0 5px 5px 0"
				:value="refCode"
			/>
			<!-- :label-placeholder="$t('pages.profile.copyText.placeHolder')" -->
			<copy-to-clipboard
				:text="refCode"
				class="cursor-pointer"
				@copy="handleCopy"
			>
				<vs-button
					class="text-sm"
					type="border"
					style="border-radius: 5px 0 0 5px"
				>
					{{ $t("pages.profile.copyText.title") }}
				</vs-button>
			</copy-to-clipboard>
		</div>
		<div v-else class="flex flex-row">
			<vs-input
				id="ref-input"
				v-model="refCode"
				:disabled="disabled"
				:value="refCode"
				style="border-radius: 5px 0 0 5px"
			/>
			<copy-to-clipboard
				:text="refCode"
				class="cursor-pointer"
				@copy="handleCopy"
			>
				<vs-button
					class="text-sm"
					type="border"
					style="border-radius: 0 5px 5px 0"
				>
					{{ $t("pages.profile.copyText.title") }}
				</vs-button>
			</copy-to-clipboard>
			<!-- :label-placeholder="$t('pages.profile.copyText.placeHolder')" -->
		</div>
	</div>
</template>

<script>
import CopyToClipboard from "vue-copy-to-clipboard";
import i18n from "@/i18n";

export default {
	components: { CopyToClipboard },
	props: {
		placeholder: {
			required: false,
			type: String,
			default: function () {
				return this.$t("pages.profile.copyText.placeHolder");
			},
		},
		disabled: {
			type: Boolean,
			default: true,
		},
		refCode: {
			type: String,
			default: "ID12345678",
		},
	},
	data() {
		return {};
	},
	computed: {
		isRtl() {
			return this.$i18n.locale === "Fa" ? false : true;
		},
	},
	methods: {
		handleCopy() {
			this.$toast.success("کد با موفقیت کپی شد.");
		},
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	// .vs-input--input {
	// 	border-radius: 0 5px 5px 0;
	// }
	// .vs-button {
	// 	border-radius: 5px 0 0 5px;
	// }
	.vs-input--input .rtl-radius {
		border-radius: 5px 0 0 5px !important;
	}
	.vs-input--input .ltr-radius {
		border-radius: 0 5px 5px 0 !important;
	}
}
</style>
