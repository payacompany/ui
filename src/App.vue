<template>
	<div id="app">
		<component :is="layout">
			<transition name="fade" mode="out-in">
				<router-view :layout="layout" />
			</transition>
		</component>
	</div>
</template>

<script>
export default {
	/* eslint-disable prettier-vue/prettier */
	computed: {
		layout() {
			return this.$route.meta.layout || "default-layout";
		},
	},
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap");
html:lang(fa) * {
	direction: rtl;
	font-family: "IRANSansFa";
}
html:lang(en) * {
	direction: ltr;
	font-family: "Titillium Web", sans-serif;
	font-weight: 800;
}
html:lang(en) * .material-icons,
html:lang(fa) * .material-icons {
	font-family: "Material Icons";
	font-weight: normal;
	font-style: normal;
	font-size: 24px; /* Preferred icon size */
	display: inline-block;
	line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;

	/* Support for all WebKit browsers. */
	-webkit-font-smoothing: antialiased;
	/* Support for Safari and Chrome. */
	text-rendering: optimizeLegibility;

	/* Support for Firefox. */
	-moz-osx-font-smoothing: grayscale;

	/* Support for IE. */
	font-feature-settings: "liga";
}

.fade-enter-active,
.fade-leave-active {
	transition-duration: 0.3s;
	transition-property: opacity;
	transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
