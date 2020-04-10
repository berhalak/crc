<template>
  <div class="comp" v-if="false"></div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    async add(this: any) {
      await Card.addNew();
      await this.load();
    },
    async load(this: any) {
      this.list = await Card.load();
      this.$emit("list", this.list);
    }
  },
  async mounted(this: any) {
    this.load();
  }
};
</script>

<style lang="scss">
.comp {
}
</style>