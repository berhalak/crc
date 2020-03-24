<template>
	<Panel class="bg-gray-300">
		<Box class="shadow-xl" v-for="(i,k) in board.cards" :key="k">
			<Card :value="i" />
		</Box>
	</Panel>
</template>
<style lang="scss">
</style>