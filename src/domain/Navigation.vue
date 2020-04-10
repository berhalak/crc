<template>
  <div class="comp">    
    <div class="py-2 flex justify-between items-baseline">
      <div class="font-medium text-gray-800">Navigation</div>
      <div
        @click="clickAdd()"
        class="px-4 py-2 border-red-300 bg-red-500 rounded shadow text-white text-sm font-medium uppercase cursor-pointer"
      >Add</div>    
    </div>    
    <CardInfo v-for="(i,k) in list" :key="k" :name="i.name" class="mt-4 cursor-pointer" @click="clickCard(i)" />
  </div>
</template>