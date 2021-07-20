<template>
	<vs-table
		:data="openOrders"
		:max-items="2"
		pagination
		strip
		no-data-text="رکوردی موجود نیست"
	>
		<template slot="thead">
			<vs-th
				v-for="(th, index) in $t('pages.trade.openOrders.table.fields')"
				:key="index"
			>
				{{ th.title }}
			</vs-th>
		</template>

		<template slot-scope="{ data }">
			<vs-tr
				v-for="(tr, indextr) in data"
				:key="indextr"
				class="cursor-pointer"
			>
				<vs-td :data="data[indextr].date">
					{{ data[indextr].date }}
				</vs-td>

				<vs-td :data="data[indextr].price">
					{{ data[indextr].price }}
				</vs-td>

				<vs-td :data="data[indextr].amount">
					{{ data[indextr].amount }}
				</vs-td>

				<vs-td :data="data[indextr].value">
					{{ data[indextr].value }}
				</vs-td>

				<vs-td :data="data[indextr].filled">
					{{ data[indextr].filled }}
				</vs-td>

				<vs-td>
					<vs-button size="small" color="danger" class="w-full">
						{{ $t("pages.trade.openOrders.cancel") }}
					</vs-button>
				</vs-td>
			</vs-tr>
		</template>
	</vs-table>
</template>

<script>
export default {
	data() {
		return {
			openOrders: [
				{
					date: "1400/1/6",
					price: 30000,
					amount: 1,
					value: 5,
					filled: 0,
				},
				{
					date: "1400/1/6",
					price: 30000,
					amount: 1,
					value: 5,
					filled: 0,
				},
				{
					date: "1400/1/6",
					price: 30000,
					amount: 1,
					value: 5,
					filled: 0,
				},
				{
					date: "1400/1/6",
					price: 30000,
					amount: 1,
					value: 5,
					filled: 0,
				},
				{
					date: "1400/1/6",
					price: 30000,
					amount: 1,
					value: 5,
					filled: 0,
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
::v-deep {
	.vs-table {
		.vs-table--thead {
			background: transparent !important;
			th {
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
	}
	.vs-table--tbody {
		overflow: hidden;
		text-align: center;
	}
	.vs-table--tbody-table {
		min-width: auto;
	}
}
</style>
