<template>
	<div class="locale-switcher">🌐 {{ $i18n.locale }}</div>
</template>
<script>
import i18n from "@/i18n";

export default {
	methods: {
		setLocale (locale) {
			this.$i18n.locale = locale;
		}
	},
	mounted () {
		console.log("Active locale: ", i18n.locale);
	}
};
</script>
