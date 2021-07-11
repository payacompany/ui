<template>
	<div class="footer block md:hidden shadow-inner border-t border-gray-300">
		<nav class="flex flex-row items-baseline pt-2 w-full">
			<ul class="w-full flex flex-row justify-between px-3 text-xs">
				<li class="flex flex-col justify-center text-center text-gray-500">
					<span class="material-icons">
						account_circle
					</span>

					{{ $t("nav.profile") }}
				</li>
				<li class="flex flex-col justify-center text-center text-gray-500">
					<span class="material-icons">
						account_balance_wallet
					</span>
					{{ $t("nav.trade") }}
				</li>

				<li class="flex flex-col justify-center text-center text-gray-500">
					<span class="material-icons">
						signal_cellular_alt
					</span>
					{{ $t("nav.wallet") }}
				</li>
				<li class="flex flex-col justify-center text-center text-gray-500">
					<span class="material-icons">
						dvr
					</span>
					{{ $t("nav.orders") }}
				</li>
				<li class="flex flex-col justify-center text-center text-gray-500">
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
export default {};
</script>

<style lang="scss" scoped>
.footer {
	position: fixed;
	width: 100%;
	bottom: 0;
	height: 54px;
}
span {
	font-size: 18px;
}
</style>
