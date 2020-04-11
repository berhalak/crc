<template>
	<div class="bg-gray-300 h-full">
		<div class="flex h-full">
			<div class="px-4 w-56 bg-gray-200">
				<Navigation :value="nav" />
			</div>
			<div class="flex-grow">
				<Board :value="board" />
			</div>
		</div>
	</div>
</template>
<style lang="scss">
</style>