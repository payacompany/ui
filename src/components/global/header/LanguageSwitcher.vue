<template>
	<div class="locale-switcher">
		<vs-dropdown>
			<vs-button type="gradient" icon="expand_more" size="small">
				{{ $i18n.locale }}
			</vs-button>
			<!-- <a href="#">Hola mundo</a> -->

			<vs-dropdown-menu>
				<vs-dropdown-item
					v-for="(lang, index) in langs"
					:key="index"
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
	data () {
		return {
			langs: [
				{
					nameEn: "En",
					value: "En",
					nameFa: "انگلیسی"
				},
				{
					nameEn: "Fa",
					value: "Fa",
					nameFa: "فارسی"
				}
			]
		};
	},
	methods: {
		setLocale (locale) {
			this.$vs.loading();
			this.$i18n.locale = locale.value;
			setTimeout(() => {
				this.$vs.loading.close();
			}, 300);
		}
	},
	mounted () {}
};
</script>
