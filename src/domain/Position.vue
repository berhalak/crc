<template>
	<Box class="shadow" :cords="value" @save="el => savePos(el)">
		<div class="flex">
			<Textbox v-model="card.name" class="flex-grow border-0 border-b" />
			<div class="flex items-center">
				<div
					@click="hide()"
					class="rounded cursor-pointer mr-2 px-2 text-sm py-2 text-gray-100 shadow-lg font-medium bg-blue-400 select-none"
				>Hide</div>
			</div>
		</div>
		<div class="flex">
			<Textbox multi v-model="card.desc" class="text-sm w-3/4 h-32 border-0 border-r" />
			<Textbox multi v-model="card.links" class="text-sm w-1/4 h-32 border-0" />
		</div>
	</Box>
</template>

