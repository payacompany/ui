<template>
	<div class="footer block md:hidden border-t border-gray-300 bg-white">
		<nav class="flex flex-row items-baseline pt-2 w-full">
			<ul class="w-full flex flex-row justify-between px-3 text-xs">
				<li
					class="flex flex-col justify-center text-center text-gray-500"
					@click="changeRoute(0)"
				>
					<span class="material-icons">
						account_circle
					</span>

					{{ $t("nav.profile") }}
				</li>
				<li
					class="flex flex-col justify-center text-center text-gray-500"
					@click="changeRoute(1)"
				>
					<span class="material-icons">
						account_balance_wallet
					</span>
					{{ $t("nav.trade") }}
				</li>

				<li
					class="flex flex-col justify-center text-center text-gray-500"
					@click="changeRoute(2)"
				>
					<span class="material-icons">
						signal_cellular_alt
					</span>
					{{ $t("nav.wallet") }}
				</li>
				<li
					class="flex flex-col justify-center text-center text-gray-500"
					@click="changeRoute(3)"
				>
					<span class="material-icons">
						dvr
					</span>
					{{ $t("nav.orders") }}
				</li>
				<li
					class="flex flex-col justify-center text-center text-gray-500"
					@click="changeRoute(4)"
				>
					<span class="material-icons">
						history
					</span>
					{{ $t("nav.history") }}
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	methods: {
		changeRoute (index) {
			switch (index) {
				case 0:
					this.$router.push("/");
					break;
				case 1:
					this.$router.push("/trade");
					break;
				case 2:
					this.$router.push("/wallet");
					break;
				case 3:
					this.$router.push("/orders");
					break;
				default:
					break;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.footer {
	position: fixed;
	width: 100%;
	bottom: 0;
	height: 54px;
	z-index: 99999;
}
span {
	font-size: 18px;
}
</style>
