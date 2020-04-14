<template>
	<div
		@click="$emit('click')"
		class="select-none px-4 py-2 border-red-300 bg-red-500 rounded shadow text-white text-sm font-medium uppercase cursor-pointer"
	>
		<slot />
	</div>
</template>
