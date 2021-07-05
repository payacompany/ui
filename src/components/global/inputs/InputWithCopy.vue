<template>
	<div class="mt-8 w-full flex flex-row w-full">
		<vs-input
			id="ref-input"
			v-model="refCode"
			disabled
			label-placeholder="کد معرف شما"
		/>
		<div class="mt-4">
			<vs-button class="text-sm" @click.prevent.stop="copyTestingCode">
				کپی کردن
			</vs-button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			testingCode: "1234",
			refCode: "ID12345678"
		};
	},
	methods: {
		copyTestingCode () {
			let codeToCopy = document.querySelector("#ref-input");
			codeToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
			codeToCopy.select();
			try {
				var successful = document.execCommand("copy");
				var msg = successful ? "successful" : "unsuccessful";
				alert("Testing code was copied " + msg, successful);
			} catch (err) {
				alert("Oops, unable to copy");
			}
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
