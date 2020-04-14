<template>
	<div
		class="box"
		draggable="true"
		@click="clicked()"
		@drag="drag"
		@dragend="dragEnd"
		@dragstart="dragStart"
		:style="{zIndex : index}"
	>
		<slot />
	</div>
</template>
<script>

let globalIndex = 10;

export default {
	data() {
		return {
			x: 0,
			y: 0,
			startx: 0,
			starty: 0,
			index: 10
		};
	},
	methods: {
		clicked() {
			this.$emit('click');
			this.index = ++globalIndex;
		},
		dragEnd(e) {
			this.$el.classList.toggle("drag");
		},
		dragStart(e) {
			this.x = e.x;
			this.y = e.y;
			this.startx = this.$el.offsetLeft;
			this.starty = this.$el.offsetTop;
			this.$el.classList.toggle("drag");
			this.index = ++globalIndex;
		},
		drag(e) {
			if (e.screenX == 0) return;

			const newTop = this.starty + (e.y - this.y);
			const newLeft = this.startx + (e.x - this.x);
			this.$el.style.top = newTop + "px";
			this.$el.style.left = newLeft + "px";
		}
	}
};
</script>
<style lang="scss">
.box {
	position: absolute;
	background: white;
	&.drag {
		cursor: grab;
		z-index: 10;
	}
}
</style>