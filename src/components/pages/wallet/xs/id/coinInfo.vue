<template>
	<div
		class="flex flex-col justify-center p-3 bg-white shadow-lg m-3 rounded-md"
	>
		<div class="flex flex-row justify-center items-center mt-5">
			<img
				src="../../../../../assets/img/BTC.png"
				class="h-12 w-12 object-cover"
				alt=""
			/>
			<div class="text-left">
				<p class="font-bold text-md px-3">
					BTC
				</p>
				<p class="font-normal text-sm px-3">
					Bitcoin
				</p>
			</div>
		</div>
		<div class="flex justify-around text-center my-5">
			<div>
				<p class="font-nor text-md px-3">
					Total
				</p>
				<p class="font-nor text-md px-3">0 <strong>BTC</strong></p>
			</div>
			<div>
				<p class="font-nor text-md px-3">
					Available
				</p>
				<p class="font-nor text-md px-3">0 <strong>BTC</strong></p>
			</div>
		</div>
		<slot name="details" />
	</div>
</template>

<script>
export default {};
</script>

<style></style>
