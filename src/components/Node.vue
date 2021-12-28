<script setup>
import { ref, computed } from 'vue'
import Node from './Node.vue'

const open = ref(false)

const toggleOpen = () => {
  open.value = !open.value
}

const props = defineProps({
  node: Object
})

const format = computed(() => {
    if (props.node.type  === 'file'){
        const filename = props.node.name.split('.')
        return filename[filename.length - 1]
    } else {
        return ""
    }
})


</script>

<template>
    <div class="space-y-3 node">
        <div class="bg-gray-800 flex items-center justify-between px-3 py-3 rounded gap-2">
            <div class="flex items-center gap-2">
                <div v-if="node.type === 'directory'" class="p-2 bg-gray-900 rounded h-5 w-5 text-xs flex items-center justify-center">
                    D
                </div>
                <div v-if="node.type === 'file'" class="p-2 bg-gray-900 rounded h-5 w-5 text-xs flex items-center justify-center">
                    F
                </div>
                <div class="text-xs select-none">
                    {{ node.name }}
                </div>
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
                <div v-if="format" class="bg-gray-900 rounded px-2 py-1">
                    <div class="text-xs flex items-center gap-1 font-semibold text-gray-400">
                        {{ format }}
                    </div>
                </div>
            </div>
            <div v-if="node.type === 'directory' && node.contents.length" @click="toggleOpen">
                <div v-if="!open" class="text-xs bg-gray-900 rounded flex items-center justify-center cursor-pointer px-2 py-1">
                    Open
                </div>
                <div v-else class="text-xs bg-red-900 rounded flex items-center justify-center cursor-pointer px-2 py-1">
                    Close
                </div>
            </div>
        </div>
        <div v-show="open">
            <div v-if="node.type === 'directory'" class="node-list space-y-3">
                <Node v-for="node in node.contents" :node="node" />
            </div>
        </div>
    </div>
</template>
