<script setup>
import Input from './components/Input.vue'
</script>

<template>
    <div class="bg-black">
        <div class="min-h-screen min-w-screen flex flex-col items-center bg-blue-100 dark:bg-blue-800/10">
            <div class="p-10 w-full text-center flex items-center justify-center">
                <div class="flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg overflow-hidden text-sm">
                    <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                        Home
                    </div>
                    <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                        Source Code
                    </div>
                    <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                        Guide
                    </div>
                    <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                        About
                    </div>
                </div>
            </div>
            <div class="flex-grow flex flex-col items-center justify-center w-full">
                <div class="flex flex-col items-center justify-center bg-white dark:bg-gray-900 gap-8 p-12 rounded-xl border-gray-200 shadow w-1/3">
                    <div class="space-y-3 text-center">
                        <div class="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                            VisualTREE
                        </div>
                        <div class="text-gray-500 dark:text-gray-400 text-sm">
                            A tool that allows you to visualize and interact with the output of your
                            <a class="text-blue-300" href="https://linux.die.net/man/1/tree">tree</a> command.
                        </div>
                    </div>
                    <Input />
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
        </div>
    </div>
</template>
