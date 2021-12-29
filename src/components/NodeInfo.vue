<script setup>
const props = defineProps({
  node: Object
})
</script>

<template>
    <div class="flex items-center gap-2 whitespace-nowrap">
        <div v-if="node.size" class="bg-gray-500 dark:bg-gray-900 rounded px-2 py-1">
            <div class="text-xs flex items-center gap-1">
                <div class="font-medium text-gray-200 dark:text-gray-400">
                    Size: 
                </div>
                <div class="text-gray-300 dark:text-gray-500">
                    {{ node.size }}
                </div>
            </div>
        </div>
        <div v-if="node.contents" class="bg-gray-500 dark:bg-gray-900 rounded px-2 py-1">
            <div class="text-xs flex items-center gap-1">
                <div class="font-medium text-gray-200 dark:text-gray-400">
                    Items: 
                </div>
                <div class="text-gray-300 dark:text-gray-500">
                    {{ node.contents.length }}
                </div>
            </div>
        </div>
        <div v-if="node.mode" class="bg-gray-500 dark:bg-gray-900 rounded px-2 py-1">
            <div class="text-xs flex items-center gap-1">
                <div class="font-medium text-gray-200 dark:text-gray-400">
                    Mode: 
                </div>
                <div class="text-gray-300 dark:text-gray-500">
                    {{ node.mode }}
                </div>
            </div>
        </div>
        <div v-if="node.prot" class="bg-gray-500 dark:bg-gray-900 rounded px-2 py-1">
            <div class="text-xs flex items-center gap-1">
                <div class="font-medium text-gray-200 dark:text-gray-400">
                    Permissions: 
                </div>
                <div class="text-gray-300 dark:text-gray-500">
                    {{ node.prot }}
                </div>
            </div>
        </div>
        <div v-if="node.user" class="bg-gray-500 dark:bg-gray-900 rounded px-2 py-1">
            <div class="text-xs flex items-center gap-1">
                <div class="font-medium text-gray-200 dark:text-gray-400">
                    User:
                </div>
                <div class="text-gray-300 dark:text-gray-500">
                    {{ node.user }}
                </div>
            </div>
        </div>
        <div v-if="node.group" class="bg-gray-500 dark:bg-gray-900 rounded px-2 py-1">
            <div class="text-xs flex items-center gap-1">
                <div class="font-medium text-gray-200 dark:text-gray-400">
                    Group: 
                </div>
                <div class="text-gray-300 dark:text-gray-500">
                    {{ node.group }}
                </div>
            </div>
        </div>
        <div v-if="node.time" class="bg-gray-500 dark:bg-gray-900 rounded px-2 py-1">
            <div class="text-xs flex items-center gap-1">
                <div class="font-medium text-gray-200 dark:text-gray-400">
                    Date: 
                </div>
                <div class="text-gray-300 dark:text-gray-500">
                    {{ node.time }}
                </div>
            </div>
        </div>
    </div>
</template>

