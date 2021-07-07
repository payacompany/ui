<template>
	<div>
		<vs-select v-model="selectedType" label="نوع" class="mb-3">
			<vs-select-item
				v-for="(item, index) in types"
				:key="index"
				:value="item.value"
				:text="item.text"
			/>
		</vs-select>
		<vs-table
			:max-items="8"
			pagination
			:data="history"
			no-data-text="رکوردی موجود نیست"
		>
			<template slot="thead">
				<vs-th>شناسه</vs-th>
				<vs-th>واحد پول </vs-th>
				<vs-th>مقدار</vs-th>
				<vs-th>کارمزد</vs-th>
				<vs-th>وضعیت</vs-th>
				<vs-th>آدرس</vs-th>
				<vs-th>زمان ایجاد</vs-th>
				<vs-th>زمان تغییر</vs-th>
			</template>

			<template slot-scope="{ data }">
				<vs-tr v-for="(tr, indextr) in data" :key="indextr">
					<vs-td :data="data[indextr].date">
						{{ data[indextr].date }}
					</vs-td>

					<vs-td :data="data[indextr].name">
						{{ data[indextr].name }}
					</vs-td>

					<vs-td :data="data[indextr].volume">
						{{ data[indextr].volume }}
					</vs-td>

					<vs-td :data="data[indextr].type">
						{{ data[indextr].type ? "فروش" : "خرید" }}
					</vs-td>

					<vs-td>
						<close-history-modal :order-details="data[indextr]" />
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
			selectedType: 0,
			types: [
				{
					text: "همه",
					value: 0
				},
				{
					text: "واریز",
					value: 1
				},
				{
					text: "برداشت",
					value: 2
				}
			],
			history: []
		};
	}
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
	.vs-button {
		border-radius: 25px;
	}
	.vs-button--text {
		color: white !important;
	}
}
</style>
