<script setup>
import { ref } from 'vue'

import Input from './components/Input.vue'
import Node from './components/Node.vue'


const fileUploaded = ref(false)
const fileInfo = ref(null)
const fileData = ref(null)

const fileChanged = (file) => {
    fileInfo.value = file[1]
    fileData.value = file[0]
    fileUploaded.value = true
}

</script>

<template>
    <div class="bg-black">
        <div class="min-h-screen min-w-screen flex flex-col items-center bg-blue-100 dark:bg-blue-800/10 gap-10 py-10">
            <div class="w-full text-center flex items-center justify-center">
                <div class="flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg overflow-hidden text-sm">
                    <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                        Home
                    </div>
                    <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                        Guide
                    </div>
                    <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                        Code
                    </div>
                    <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                        About
                    </div>
                </div>
            </div>
            <div v-if="!fileUploaded" class="flex-grow flex flex-col items-center justify-center w-full">
                <div class="flex flex-col items-center justify-center bg-white dark:bg-gray-900 gap-8 p-12 rounded-xl border-gray-200 shadow w-[500px]">
                    <div class="space-y-3 text-center">
                        <div class="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                            VisualTREE
                        </div>
                        <div class="text-gray-500 dark:text-gray-400 text-sm">
                            A tool that allows you to visualize and interact with the output of your
                            <a class="text-blue-300" href="https://linux.die.net/man/1/tree">tree</a> command.
                        </div>
                    </div>
                    <Input @file-upload="fileChanged"/>
                    <div class="space-y-4">
                        <div class="text-gray-500 dark:text-gray-400 text-sm">
                            Example of a valid tree command:
                        </div>
                        <div class="w-full rounded-lg bg-gray-600 dark:bg-gray-800 text-white px-5 py-3 text-sm select-all">
                            tree -h -J -L 2 . > tree.json
                        </div>
                        <div class="text-gray-500 dark:text-gray-400 text-sm">
                            For a more detailed explanation of the tree command and
                            the valid list of options, please refer to the
                            <a class="text-blue-300" href="">guide</a> page.
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="flex-grow flex flex-col items-center justify-start w-full">
                <div class="text-white flex items-center justify-center w-full px-12">
                    <div class="w-full space-y-4">
                        <div v-if="fileInfo" class="text-center">
                            <div class="flex items-center justify-center gap-4 text-sm">
                                <div class="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded cursor-pointer"
                                        @click="fileUploaded = false">
                                    <div class="text-gray-200" >
                                        Upload another file
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded">
                                    <div class="font-medium text-gray-500">
                                        Number of directories: 
                                    </div>
                                    <span class="text-gray-400">
                                        {{ fileInfo.directories }}
                                    </span>
                                </div>
                                <div class="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded">
                                    <div class="font-medium text-gray-500">
                                        Number of files: 
                                    </div>
                                    <span class="text-gray-400">
                                        {{ fileInfo.files }}
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div v-if="fileData" class="bg-gray-900 p-10 rounded-lg text-center">
                            <Node :node="fileData" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
