<template>
	<div class="comp" v-if="false"></div>
</template>

<script lang="ts">
import { Card } from "./Card";

export default {
	data() {
		return {
			list: []
		};
	},
	methods: {
		async add() {
			await Card.addNew();
			this.list = await Card.load();
		}
	},
	async created(this: any) {
		this.list = await Card.load();
	}
};
</script>

<style lang="scss">
.comp {
}
</style>