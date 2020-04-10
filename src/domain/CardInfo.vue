<template>
	<div @click="$emit('click')" class="rounded p-4 bg-gray-400 mb-4 shadow-md">
        <div class="text-md font-medium">{{name}}</div>        
    </div>
</template>

<script>
export default {
	props: ["name"]
}
</script>

<style lang="scss">
.comp {
}
</style>