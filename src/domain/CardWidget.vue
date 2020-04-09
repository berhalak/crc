<template>
  <Box>
    <div class="p-2">
      <Textbox v-model="card.name" class="w-full mb-2 border-0" />
      <div class="grid grid-cols-2 gap-2">
        <div>
          <Textbox multi v-model="card.duties" class="text-sm  w-56 h-32" />
        </div>
        <div>
          <Textbox multi v-model="card.collaborators" class="text-sm w-56 h-32" />
            
        </div>
      </div>
    </div>
  </Box>
</template>

<script>
export default {
  props: ["card"]
};
</script>
