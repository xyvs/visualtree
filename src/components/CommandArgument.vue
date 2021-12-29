<script setup>
const props = defineProps({
  argument: String,
  description: String
})
</script>

<template>
    <div class="group relative">
        <div v-if="description" class="py-1 hover:bg-gray-500 cursor-help rounded select-none">
            {{ argument }}
        </div>
        <div v-else class="py-1 select-none">
            {{ argument }}
        </div>
        <div v-if="description" class="absolute bottom-1/2 left-1/2 mb-4 -translate-x-1/2 hidden group-hover:block">
            <div class="text-center px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs whitespace-nowrap">
                {{ description }}
            </div>
        </div>
    </div>
</template>
