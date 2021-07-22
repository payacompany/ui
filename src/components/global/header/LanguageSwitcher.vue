<template>
	<div class="locale-switcher">
		<vs-dropdown>
			<vs-button type="gradient" icon="expand_more" size="small">
				{{ $i18n.locale }}
			</vs-button>
			<vs-dropdown-menu>
				<vs-dropdown-item
					v-for="(lang, index) in langs"
					:key="index"
					:class="[isRtl == lang.nameEn ? 'text-blue-500' : 'text-gray-500']"
					@click="setLocale(lang)"
				>
					{{ lang.nameEn }}
				</vs-dropdown-item>
			</vs-dropdown-menu>
		</vs-dropdown>
	</div>
</template>
<script>
import i18n from "@/i18n";

export default {
	data() {
		return {
			langs: [
				{
					nameEn: "En",
					value: "En",
					nameFa: "انگلیسی",
				},
				{
					nameEn: "Fa",
					value: "Fa",
					nameFa: "فارسی",
				},
			],
		};
	},
	mounted() {
		document.getElementsByTagName("body")[0].style = "direction:rtl";
	},
	computed: {
		isRtl() {
			return this.$i18n.locale;
		},
	},
	methods: {
		setLocale(locale) {
			this.$vs.loading();
			this.$i18n.locale = locale.value;
			if (this.$i18n.locale === "En") {
				document.getElementsByTagName("body")[0].style = "direction:ltr";
				console.log(document.getElementsByTagName("body")[0]);
			} else {
				document.getElementsByTagName("body")[0].style = "direction:rtl";
			}
			setTimeout(() => {
				this.$vs.loading.close();
			}, 300);
		},
	},
};
</script>
