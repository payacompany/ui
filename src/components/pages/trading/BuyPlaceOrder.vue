<template>
	<div class="w-11/12 mx-auto">
		<vs-select v-model="selectedType" label="نوع سفارش" class="min-w-full">
			<vs-select-item
				v-for="(item, index) in types"
				:key="index"
				:value="item.value"
				:text="item.text"
			/>
		</vs-select>
		<vs-input
			class="min-w-full"
			label="قیمت"
			placeholder="قیمت مورد نظر را وارد نمایید"
		/>
		<vs-input
			class="min-w-full"
			label="حجم"
			placeholder="حجم مورد نظر را وارد نمایید"
		/>
	</div>
</template>

<script>
export default {
	data () {
		return {
			selectedType: 0,
			types: [
				{ text: "محدود", value: 0 },
				{ text: "بازار", value: 1 }
			]
		};
	}
};
</script>

<style></style>
