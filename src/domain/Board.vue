<template>
	<div class="h-full relative select-none">
		<Position v-for="(i,k) in list" :key="k" :value="i" :board="board" />

		<Button
			style="top: 4px; right: 4px"
			@click="save()"
			class="absolute text-green-900 bg-green-400 active:bg-red-500"
		>Save</Button>
	</div>
</template>
