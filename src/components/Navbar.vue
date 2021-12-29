<template>
    <div class="w-full text-center flex items-center justify-center">
        <div class="flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg overflow-hidden text-sm">
            <router-link :to="{ name: 'home' }">
                <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                    Home
                </div>
            </router-link>
            <router-link :to="{ name: 'guide' }">
                <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                    Guide
                </div>
            </router-link>
            <a href="https://github.com/xyvs/visualtree" target="_blank">
                <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                    Code
                </div>
            </a>
            <router-link :to="{ name: 'about' }">
                <div class="px-4 py-2 dark:text-white hover:text-blue-300 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer">
                    About
                </div>
            </router-link>
        </div>
    </div>
</template>

