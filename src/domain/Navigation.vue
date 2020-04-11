<template>
	<div class="comp" v-if="nav">
		<div class="py-2 flex justify-between items-baseline">
			<div class="font-medium text-gray-800">Navigation</div>
			<div
				@click="add()"
				class="px-4 py-2 border-red-300 bg-red-500 rounded shadow text-white text-sm font-medium uppercase cursor-pointer"
			>Add</div>
		</div>
		<CardInfo
			v-for="(i,k) in list"
			:key="k"
			:value="i"
			class="mt-4 cursor-pointer"
			@click="x => clicked(i)"
		/>
	</div>
</template>