<template>
	<div>
		<vs-table :max-items="8" pagination :data="userActivities">
			<template slot="thead">
				<vs-th
					v-for="(th, index) in $t(
						'pages.profile.AccountActivity.table.fields'
					)"
					:key="index"
					class="font-bold"
				>
					{{ th.title }}
				</vs-th>
			</template>

			<template slot-scope="{ data }">
				<vs-tr v-for="(tr, indextr) in data" :key="indextr">
					<vs-td :data="data[indextr].date">
						{{ data[indextr].date }}
					</vs-td>

					<vs-td :data="data[indextr].activity">
						{{ data[indextr].activity }}
					</vs-td>

					<vs-td :data="data[indextr].status">
						{{
							data[indextr].status
								? $t("pages.profile.AccountActivity.successful")
								: $t("pages.profile.AccountActivity.unsuccessful")
						}}
					</vs-td>

					<vs-td :data="data[indextr].ip">
						{{ data[indextr].ip }}
					</vs-td>

					<vs-td :data="data[indextr].userAgent">
						{{ data[indextr].userAgent }}
					</vs-td>
				</vs-tr>
			</template>
		</vs-table>
	</div>
</template>

<script>
export default {
	props: {
		userActivities: {
			type: Array,
			default: () => [],
		},
	},
	data: () => ({
		users: [
			{
				date: "1399/12/5",
				activity: "ورود به حساب کاربری",
				status: true,
				ip: "192.168.10.1",
				userAgent: "Chrome 91 Windows 10",
			},
		],
	}),
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-con-table {
		.product-name {
			max-width: 23rem;
		}
		.vs-table--header {
			display: flex;
			flex-wrap: wrap-reverse;
			margin-left: 1.5rem;
			margin-right: 1.5rem;
			> span {
				display: flex;
				flex-grow: 1;
			}
			.vs-table--search {
				padding-top: 0;
				.vs-table--search-input {
					padding: 0.9rem 2.5rem;
					& + i {
						right: 1rem;
						left: auto;
						transform: rotateY(180deg);
					}
					&:focus + i {
						right: 1rem;
						left: auto;
						transform: rotateY(0deg);
					}
				}
			}
		}
		.vs-table {
			border-collapse: separate;
			border-spacing: 0 1rem;
			padding: 0 1rem;
			tr {
				box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
				td {
					padding: 12px;
					span {
						display: flex;
						justify-content: center;
						color: black;
					}
					&:first-child {
						border-top-left-radius: 0.5rem;
						border-bottom-left-radius: 0.5rem;
					}
					&:last-child {
						border-top-right-radius: 0.5rem;
						border-bottom-right-radius: 0.5rem;
					}
				}
				td.td-check {
					padding: 20px !important;
				}
			}
		}
		.exel {
			width: 120px;
			border: 2px solid yellow;
			text-align: center !important;
			border-radius: 15px; //
			color: black;
		}
		.vs-table--thead {
			th {
				padding-top: 1rem;
				padding-bottom: 1rem;
				.vs-table-text {
					color: black;
					text-transform: uppercase;
					font-weight: normal;
					display: flex;
					justify-content: center;
				}
			}
			th.td-check {
				padding: 0 15px !important;
			}
			tr {
				background: none;
				box-shadow: none;
			}
		}
		.vs-table--pagination {
			justify-content: center;
		}
	}
}
</style>
