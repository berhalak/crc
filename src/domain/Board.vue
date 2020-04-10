<template>
	<div class="h-full relative">
		<Position v-for="(i,k) in list" :key="k" :value="i" />
	</div>
</template>
<style lang="scss">
.card {
}
</style>