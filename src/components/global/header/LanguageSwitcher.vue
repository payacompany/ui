<template>
	<div class="locale-switcher">
		<vs-dropdown class="">
			<vs-button
				type="gradient"
				icon="expand_more"
				size="small"
				class="text-center"
			>
				<span v-if="$i18n.locale == 'Fa'" class="pl-2"> فارسی </span>
				<span v-else class="pr-2"> En </span>
			</vs-button>
			<vs-dropdown-menu>
				<vs-dropdown-item
					v-for="(lang, index) in langs"
					:key="index"
					:class="[isRtl == lang.nameEn ? 'text-blue-500' : 'text-gray-500']"
					@click="setLocale(lang)"
				>
					<div v-if="isRtl == 'En'" class="text-left">
						{{ lang.nameEn }}
					</div>
					<div v-else class="text-right">
						{{ lang.nameFa }}
					</div>
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
				localStorage.setItem("local", "En");
				this.$vs.rtl = false;
			} else {
				document.getElementsByTagName("body")[0].style = "direction:rtl";
				localStorage.setItem("local", "Fa");
				this.$vs.rtl = true;
			}
			setTimeout(() => {
				this.$vs.loading.close();
			}, 300);
		},
	},
};
</script>
