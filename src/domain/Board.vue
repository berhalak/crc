<template>
	<div class="h-full relative select-none">
		<Position v-for="i in list" :key="i.id" :value="i" :board="board" />

		<Button
			style="top: 4px; right: 4px"
			@click="save()"
			class="absolute text-green-900 bg-green-400 active:bg-red-500"
		>Save</Button>

    <div class="absolute bottom-0 right-0 text-xs">ver1</div>
	</div>
</template>
