<template>
	<div>
		<vs-table :data="markets" strip no-data-text="رکوردی موجود نیست">
			<template slot="thead">
				<vs-th
					v-for="(th, index) in $t('pages.trade.orderBook.table.fields')"
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
					<vs-td :data="data[indextr].name">
						{{ data[indextr].name }}
					</vs-td>

					<vs-td :data="data[indextr].price">
						{{ data[indextr].price }}
					</vs-td>

					<vs-td
						:data="data[indextr].changes"
						:class="[
							data[indextr].changes >= 0 ? 'text-success' : 'text-danger'
						]"
					>
						{{ data[indextr].changes }}%
					</vs-td>
				</vs-tr>
			</template>
		</vs-table>
	</div>
</template>

<script>
export default {
	data () {
		return {
			markets: [
				{ name: "BTC/USDT", price: 30000, changes: 0 },
				{ name: "ETH/USDT", price: 1200, changes: -5 }
			]
		};
	}
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
