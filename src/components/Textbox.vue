<template>
	<textarea v-if="multi !== undefined" class="textbox" />
	<input v-else type="text" v-model="text" class="textbox" />
</template>
<script>
export default {
	props: ["value", "multi"],
	computed: {
		text: {
			get() {
				return this.value;
			},
			set(v) {
				this.$emit("input", v);
			}
		}
	}
};
</script>
<style lang="postcss">
.textbox {
	@apply border px-2 py-2 outline-none;
}
</style>