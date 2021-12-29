<script setup>
import Node from './Node.vue'

const props = defineProps({
  fileInfo: Object,
  fileData: Object,
})
</script>

<template>
    <div class="text-white flex items-center justify-center w-full px-12">
        <div class="w-full space-y-4">
            <div v-if="fileInfo" class="text-center">
                <div class="flex items-center justify-center gap-4 text-sm">
                    <div class="flex items-center gap-2 bg-white dark:bg-gray-900 px-4 py-2 rounded cursor-pointer"
                        @click="$emit('upload-another')">
                        <div class="text-gray-800 dark:text-gray-200 font-medium" >
                            Upload another file
                        </div>
                    </div>
                    <div class="flex items-center gap-2 bg-white dark:bg-gray-900 px-4 py-2 rounded">
                        <div class="font-medium text-gray-500">
                            Number of directories: 
                        </div>
                        <span class="text-gray-400">
                            {{ fileInfo.directories }}
                        </span>
                    </div>
                    <div class="flex items-center gap-2 bg-white dark:bg-gray-900 px-4 py-2 rounded">
                        <div class="font-medium text-gray-500">
                            Number of files: 
                        </div>
                        <span class="text-gray-400">
                            {{ fileInfo.files }}
                        </span>
                    </div>
                </div>
            </div>
            <div v-if="fileData" class="bg-white dark:bg-gray-900 p-10 rounded-lg text-center">
                <Node :node="fileData" />
            </div>
        </div>
    </div>
</template>
