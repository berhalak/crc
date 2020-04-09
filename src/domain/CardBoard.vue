<template>
  <div class="h-full relative">
      <CardWidget v-for="(i,k) in cards" :key="k" :card="i" />
  </div>
</template>
<script>
export default {
    props: ["card"],
    data(){
        return {
            cards : []
        }
    },
    methods: {
        add(card){
            this.cards.push(card);
        }
    }
}
</script>
<style lang="scss">
.card {
}
</style>