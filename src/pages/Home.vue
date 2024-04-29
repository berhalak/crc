<template>
	<div class="bg-gray-300 h-full">
		<div class="flex h-full">
			<div class="px-4 w-56 bg-gray-200">
				<Navigation :nav="nav" />
			</div>
			<div class="flex-grow">
				<Board :board="board" :cards="cards" />
			</div>
		</div>
	</div>
</template>