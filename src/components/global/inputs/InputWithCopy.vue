<template>
	<copy-to-clipboard :text="refCode" class="cursor-pointer" @copy="handleCopy">
		<div class="mt-8 flex flex-row w-full">
			<vs-input
				id="ref-input"
				v-model="refCode"
				:disabled="disabled"
				:label-placeholder="placeholder"
				:value="refCode"
			/>
			<div class="mt-4">
				<vs-button class="text-sm">کپی کردن</vs-button>
			</div>
		</div>
	</copy-to-clipboard>
</template>

<script>
import CopyToClipboard from "vue-copy-to-clipboard";

export default {
	props: {
		placeholder: {
			type: String,
			default: "کد معرف شما"
		},
		disabled: {
			type: Boolean,
			default: true
		},
		refCode: {
			type: String,
			default: "ID12345678"
		}
	},
	components: { CopyToClipboard },
	data () {
		return {};
	},
	methods: {
		handleCopy () {
			this.$toast.success("کد با موفقیت کپی شد.");
		}
	}
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-input--input {
		border-radius: 0 5px 5px 0;
	}
	.vs-button {
		border-radius: 5px 0 0 5px;
	}
}
</style>
