<script setup>
import { ref } from 'vue'
import Node from './Node.vue'
import NodeIcon from './NodeIcon.vue'
import NodeInfo from './NodeInfo.vue'

const open = ref(false)

const toggleOpen = () => {
  open.value = !open.value
}

const props = defineProps({
  node: Object
})

</script>

<template>
    <div class="space-y-3 node">
        <div class="bg-gray-200 dark:bg-gray-800 flex items-center justify-between pl-3 pr-5 py-3 rounded gap-2 overflow-x-auto text-gray-800 dark:text-white">
            <div class="flex items-center gap-3">
                <NodeIcon :name="node.name" :type="node.type" :open="open" />
                <div class="text-xs select-none whitespace-nowrap">
                    {{ node.name }}
                </div>
                <NodeInfo :node="node" />
            </div>
            <div v-if="node.type === 'directory' && node.contents.length" @click="toggleOpen">
                <div v-if="!open" class="text-xs bg-gray-400 dark:bg-gray-900 rounded flex items-center justify-center cursor-pointer px-2 py-1 text-white">
                    Open
                </div>
                <div v-else class="text-xs bg-red-400 dark:bg-red-900 rounded flex items-center justify-center cursor-pointer px-2 py-1 text-white">
                    Close
                </div>
            </div>
        </div>
        <div v-if="open">
            <div v-if="node.type === 'directory'" class="node-list space-y-3">
                <Node v-for="node in node.contents" :node="node" />
            </div>
        </div>
    </div>
</template>
