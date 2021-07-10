<template>
	<div class="py-3 flex justify-between items-center">
		<div>
			<p class="text-bold" :class="[step.isCompleted ? 'text-gray-400' : '']">
				<span> {{ index + 1 }}. </span>
				{{ step.name }}
			</p>
			<p class="text-xs" :class="[step.isCompleted ? 'text-gray-400' : '']">
				{{ step.accessTo }}
			</p>
		</div>
		<div>
			<vs-button
				v-if="!step.isCompleted"
				:disabled="!step.isAllow"
				:to="{ path: setRoute }"
				size="small"
			>
				{{ $t("pages.profile.userVerification.verify") }}
			</vs-button>
			<p v-else class="text-xs text-success">
				{{ $t("pages.profile.userVerification.confirmed") }}
				<span class="material-icons">
					check
				</span>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			default: 1
		},
		step: {
			type: Object,
			default: () => {}
		}
	},
	data () {
		return {
			routePath: "/"
		};
	},
	computed: {
		setRoute () {
			switch (this.index) {
				case 0:
					return "/profile/confirm-email";
					break;
				case 1:
					return "/profile/confim-phone";
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
		}
	}
};
</script>

<style lang="scss" scoped>
.material-icons {
	font-size: 16px;
}
</style>
