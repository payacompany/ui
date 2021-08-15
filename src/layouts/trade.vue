<template>
	<div class="trade">
		<header-bar class="hidden md:block" />
		<header-xs />
		<slot />
	</div>
</template>

<script>
import HeaderBar from "../components/global/header/index.vue";
import HeaderXs from "../components/global/header/xs/index.vue";

export default {
	name: "Trade",
	components: {
		HeaderBar,
		HeaderXs
	},
	sockets: {
		connect: function () {
			console.log("socket connected");
		},
		customEmit: function (data) {
			console.log(
				'this method was fired by the socket server. eg: io.emit("customEmit", data)'
			);
		}
	}
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
	.trade {
		height: 100vh;
		overflow: hidden;
	}
}
</style>
