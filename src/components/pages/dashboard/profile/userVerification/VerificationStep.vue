<template>
	<div class="py-3 flex justify-between items-center">
		{{ level }} - {{ index }}
		<div>
			<p class="text-bold" :class="[index < level - 1 ? 'text-gray-400' : '']">
				<span> {{ index + 1 }}. </span>
				{{ step.name }}
			</p>
			<p class="text-xs" :class="[index < level ? 'text-gray-400' : '']">
				{{ step.accessTo }}
			</p>
		</div>
		<div>
			<vs-button
				v-if="index > level"
				:to="{ path: setRoute }"
				size="small"
				type="border"
			>
				{{ $t("pages.profile.userVerification.verify") }}
			</vs-button>
			<p v-else class="text-xs text-success">
				{{ $t("pages.profile.userVerification.confirmed") }}
				<span class="material-icons"> check </span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			default: 1,
		},
		level: {
			type: Number,
			default: 0,
		},
		step: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			routePath: "/",
		};
	},
	computed: {
		setRoute() {
			switch (this.index) {
				case 0:
					return "/profile/confirm-email";
					break;
				case 1:
					return "/profile/confirm-phone";
					break;
				case 2:
					return "/profile/user-identify";
					break;
				case 3:
					return "/profile/user-bank-accounts";
					break;
				case 4:
					return "/profile/residence-info";
					break;
				default:
					return "/";
					break;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.material-icons {
	font-size: 16px;
}
</style>
