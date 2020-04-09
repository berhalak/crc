<template>
	<div class="bg-gray-300">
		<div class="grid grid-cols-12 h-full">
			<div class="px-4 col-span-3 bg-gray-200">
				<CardList ref="list" @click="c => $refs.board.add(c)" />
			</div>
			<div class="col-span-9">
				<CardBoard ref="board" />
			</div>
		</div>
	</div>
</template>
<style lang="scss">
</style>