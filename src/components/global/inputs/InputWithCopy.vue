<template>
	<div class="md:mt-8 flex flex-row w-full">
		<vs-input
			id="ref-input"
			v-model="refCode"
			:disabled="disabled"
			class="rtl-radius"
			:label-placeholder="placeholder"
			:value="refCode"
		/>
		<div class="mt-4">
			<copy-to-clipboard
				:text="refCode"
				class="cursor-pointer"
				@copy="handleCopy"
			>
				<vs-button class="text-sm" type="border">
					{{ $t("pages.profile.copyText.title") }}
				</vs-button>
			</copy-to-clipboard>
		</div>
	</div>
</template>

<script>
import CopyToClipboard from "vue-copy-to-clipboard";
import i18n from "@/i18n";

export default {
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
	components: { CopyToClipboard },
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
