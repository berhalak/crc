<template>
	<div class="h-full relative select-none">
		<Position v-for="(i,k) in list" :key="k" :value="i" />

		<div
			class="absolute rounded px-4 py-2 text-green-900 shadow-lg font-medium bg-green-400"
			style="top: 4px; right: 4px"
		>Save</div>
	</div>
</template>
