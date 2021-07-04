<template lang="html">
	<div id="parentx">
		<vs-button @click="active = !active" color="primary" type="filled">
			Open Sidebar
		</vs-button>
		<vs-sidebar
			v-model="active"
			parent="body"
			default-index="1"
			color="primary"
			class="sidebarx"
			spacer
		>
			<div slot="header" class="header-sidebar">
				<vs-avatar
					size="70px"
					src="https://randomuser.me/api/portraits/men/85.jpg"
				/>

				<h4>
					My Name
				</h4>
			</div>

			<vs-sidebar-item index="1" icon="question_answer">
				Dashboard
			</vs-sidebar-item>

			<vs-sidebar-item index="2" icon="gavel">
				History
			</vs-sidebar-item>

			<vs-divider icon="person" position="left">
				User
			</vs-divider>

			<vs-sidebar-item index="3" icon="verified_user">
				Configurations
			</vs-sidebar-item>
			<vs-sidebar-item index="4" icon="account_box">
				Profile
			</vs-sidebar-item>
			<vs-sidebar-item index="5">
				Card
			</vs-sidebar-item>

			<div class="footer-sidebar" slot="footer">
				<vs-button icon="reply" color="danger" type="flat">log out</vs-button>
			</div>
		</vs-sidebar>
	</div>
</template>

<script>
export default {
	data: () => ({
		active: false
	})
};
</script>
