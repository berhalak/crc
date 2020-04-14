<template>
	<div class="comp" v-if="nav">
		<div class="py-2 flex justify-between items-baseline">
			<div class="font-medium text-gray-800">Navigation</div>
			<Button @click="add()">Add</Button>
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