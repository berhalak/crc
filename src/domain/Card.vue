<template>
	<div @click="$emit('click')" class="z-50 p-6 border border-gray-500 rounded card">
		<div class="mb-4">
			<textbox class="w-full" />
		</div>
		<div class="flex">
			<div class="mr-4">
				<textbox multi />
			</div>
			<div>
				<textbox multi />
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.card {
}
</style>