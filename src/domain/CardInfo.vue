<template>
	<div @click="$emit('click')" class="rounded p-4 bg-gray-400 mb-4 shadow-md">
        <div class="text-md font-medium">{{card.name}}</div>        
    </div>
</template>

<script>
export default {
	props: ["card"]
}
</script>

<style lang="scss">
.comp {
}
</style>