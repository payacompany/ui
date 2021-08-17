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
		const cookie = this.$cookies.get("_barong_session", { httpOnly: false });
		this.$cookies.set("_barong_session", cookie, { httpOnly: false });
		axios.defaults.withCredentials = true;
		// axios.defaults.headers.common["Cookie"] = `_barong_session=${cookie}`;
		this.$store.commit("auth/SET_COOKIE", cookie);
		try {
			this.socket = new WebSocket(
				"wss://dax.autovm.ir/api/v2/ranger/private/?stream=deposit_address&stream=ethusd.ob-inc&stream=ethusd.trades&stream=global.tickers&stream=order&stream=trade"
			);
			console.log(socket);
		} catch {
			console.log(err);
		}
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
