<script setup>
const props = defineProps({
  node: Object
})
</script>

<template>
    <div v-if="node.size" class="bg-gray-900 rounded px-2 py-1">
        <div class="text-xs flex items-center gap-1">
            <div class="font-medium text-gray-400">
                Size: 
            </div>
            <div class="text-gray-500">
                {{ node.size }}
            </div>
        </div>
    </div>
    <div v-if="node.contents" class="bg-gray-900 rounded px-2 py-1">
        <div class="text-xs flex items-center gap-1">
            <div class="font-medium text-gray-400">
                Items: 
            </div>
            <div class="text-gray-500">
                {{ node.contents.length }}
            </div>
        </div>
    </div>
</template>

