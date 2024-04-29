<template>
  <div
    class="box"
    draggable="true"
    @click="clicked()"
    @drag="drag"
    @dragend="dragEnd"
    @dragstart="dragStart"
    :style="{ zIndex: index }"
  >
    <slot />
  </div>
</template>
<script>
  let globalIndex = 10;

  export default {
    props: ['cords'],
    data() {
      return {
        x: this.$props.cords ? this.$props.cords.x : 0,
        y: this.$props.cords ? this.$props.cords.y : 0,
        startx: 0,
        starty: 0,
        index: 10,
      };
    },
    mounted() {
      this.$el.style.top = this.y + 'px';
      this.$el.style.left = this.x + 'px';
    },
    methods: {
      clicked() {
        this.$emit('click');
        this.index = ++globalIndex;
      },
      dragEnd(e) {
        this.$el.classList.toggle('drag');

        this.$emit('save', {
          x: this.$el.offsetLeft,
          y: this.$el.offsetTop,
        });
      },
      dragStart(e) {
        this.x = e.x;
        this.y = e.y;
        this.startx = this.$el.offsetLeft;
        this.starty = this.$el.offsetTop;
        this.$el.classList.toggle('drag');
        this.index = ++globalIndex;
      },
      drag(e) {
        if (e.screenX == 0) return;

        const newTop = this.starty + (e.y - this.y);
        const newLeft = this.startx + (e.x - this.x);
        this.$el.style.top = newTop + 'px';
        this.$el.style.left = newLeft + 'px';
      },
    },
  };
</script>
<style lang="css">
  .box {
    position: absolute;
    background: white;
  }
  .box.drag {
    cursor: grab;
    z-index: 10;
  }
</style>
