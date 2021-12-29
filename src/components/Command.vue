<script setup>
import { computed } from 'vue'
import CommandArgument from './CommandArgument.vue'

const props = defineProps({
  command: Object
})

const fullCommand = computed(() => {
    const fullCommand = props.command.map(x => x.argument)
    return fullCommand.join(' ')
})

const copyCommmandToClipboard = () => {
    console.log(fullCommand.value)
}

</script>
<template>
    <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-2 text-sm select-all relative">
        <div class="flex items-center gap-1">
            <CommandArgument
                v-for="argument in command"
                :argument="argument.argument"
                :description="argument.description"
            />
        </div>
        <div class="absolute right-0 bottom-0 top-0 flex items-center justify-center hidden">
            <div @click="copyCommmandToClipboard"
                class="bg-blue-800/10 hover:bg-blue-800/20 rounded border border-blue-900/20 my-1 mr-2 py-1 px-2 text-xs cursor-pointer select-none">
                Copy
            </div>
        </div>
    </div>
</template>
