<script setup>
import { ref } from 'vue'

import Navbar from './components/Navbar.vue'
import Directory from './components/Directory.vue'

import Input from './components/Input.vue'
import Command from './components/Command.vue'

import Commands from './../constants/Commands.js'

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
            <Navbar />
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
                        <Command :command="Commands.EXAMPLE_COMMAND" />
                        <div class="text-gray-500 dark:text-gray-400 text-sm">
                            For a more detailed explanation of the tree command and
                            the valid list of options, please refer to the
                            <a class="text-blue-300" href="">guide</a> page.
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="flex-grow flex flex-col items-center justify-start w-full">
                <Directory :fileInfo="fileInfo" :fileData="fileData" @upload-another="fileUploaded = false" />
            </div>
        </div>
    </div>
</template>
