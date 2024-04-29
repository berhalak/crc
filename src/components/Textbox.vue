<template>
  <textarea v-if="multi !== undefined" class="border p-2 outline-none" v-model="text" @touchstart="ignore" />
  <input v-else type="text" v-model="text" class="textbox" @touchstart="ignore"  />
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
    methods: {
      ignore(e) {
        e.preventDefault();
      },
    },
  };
</script>
