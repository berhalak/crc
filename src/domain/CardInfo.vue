<template>
	<div @click="$emit('click')" class="rounded p-4 bg-gray-400 mb-4 shadow-md select-none">
		<div class="text-md font-medium">{{value.name}}</div>
	</div>
</template>

<script>
export default {
	props: ["value"]
};
</script>

<style lang="scss">
.comp {
}
</style>