<template>
	<div class="comp">
		<CardSource ref="db" />
		<div class="py-2 flex justify-between items-baseline">
			<div class="font-medium text-gray-800">Navigation</div>
			<div
				@click="$refs.db.add()"
				class="px-4 py-2 border-red-300 bg-red-500 rounded shadow text-white text-sm font-medium uppercase cursor-pointer"
			>Add</div>
		</div>
		<template v-if="$refs.db">
			<CardInfo v-for="(i,k) in $refs.db.list" :key="k" :card="i" />
		</template>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: []
		};
	}
};
</script>

<style lang="scss">
.comp {
}
</style>