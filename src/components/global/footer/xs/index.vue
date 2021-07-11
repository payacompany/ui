<template>
	<div class="footer block md:hidden shadow-md border-t-2 border-gray-400">
		<nav class="flex flex-row items-baseline pt-1 w-full">
			<ul class="w-full flex flex-row justify-between px-3 text-xs">
				<li class="flex flex-col justify-center text-center">
					<span class="material-icons">
						account_circle
					</span>

					{{ $t("nav.profile") }}
				</li>
				<li>
					{{ $t("nav.trade") }}
				</li>

				<li>
					{{ $t("nav.wallet") }}
				</li>
				<li>
					{{ $t("nav.orders") }}
				</li>
				<li>
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
</style>
