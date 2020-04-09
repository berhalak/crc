<template>
  <Box>
      <Textbox v-model="card.name" class="w-full border-0 border-b" />
      <div class="grid grid-cols-2">
        <Textbox multi v-model="card.duties" 
        class="text-sm w-56 h-32 border-0 border-r" />
        <Textbox multi v-model="card.collaborators" class="text-sm w-56 h-32 border-0" />
      </div>
  </Box>
</template>

<script>
export default {
  props: ["card"]
};
</script>
