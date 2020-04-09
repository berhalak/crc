<template>
  <div class="comp">
    <CardSource ref="db" @list="x => list = x" />
    <div class="py-2 flex justify-between items-baseline">
      <div class="font-medium text-gray-800">Navigation</div>
      <div
        @click="$refs.db.add()"
        class="px-4 py-2 border-red-300 bg-red-500 rounded shadow text-white text-sm font-medium uppercase cursor-pointer"
      >Add</div>
    </div>
    <CardInfo v-for="(i,k) in list" :key="k" :card="i" class="mt-4 cursor-pointer" @click="x => $emit('click', i)" />
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