<template>
  <textarea v-if="multi !== undefined" class="border p-2 outline-none" />
  <input v-else type="text" v-model="text" class="textbox" />
</template>
<script>
  export default {
    props: ['value', 'multi'],
    computed: {
      text: {
        get() {
          return this.value;
        },
        set(v) {
          this.$emit('input', v);
        },
      },
    },
  };
</script>
