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
		HeaderXs,
	},
	mounted() {
		const cookie = this.$cookies.get("_barong_session", { httpOnly: true });
		this.$cookies.set("_barong_session", cookie, { httpOnly: true });
		axios.defaults.withCredentials = true;
		// axios.defaults.headers.common["Cookie"] = `_barong_session=${cookie}`;
		this.$store.commit("auth/SET_COOKIE", cookie);
	},
	sockets: {
		connect: function () {
			console.log("socket connected");
		},
		customEmit: function (data) {
			console.log(
				'this method was fired by the socket server. eg: io.emit("customEmit", data)'
			);
		},
	},
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
