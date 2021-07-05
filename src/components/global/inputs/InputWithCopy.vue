<template>
	<copy-to-clipboard :text="refCode" class="cursor-pointer" @copy="handleCopy">
		<div class="mt-8 flex flex-row w-full">
			<vs-input
				id="ref-input"
				v-model="refCode"
				disabled
				label-placeholder="کد معرف شما"
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
	components: { CopyToClipboard },
	data () {
		return {
			testingCode: "1234",
			refCode: "ID12345678"
		};
	},
	methods: {
		handleCopy (result) {
			this.$toast.success("کد معرف با موفقیت کپی شد.");
			console.log("onCopy", result);
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
