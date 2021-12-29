<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
    <div class="bg-white dark:bg-black">
        <div class="min-h-screen min-w-screen flex flex-col items-center bg-gray-100 dark:bg-blue-800/10 gap-10 py-10">
            <Navbar />
            <router-view></router-view>
        </div>
    </div>
</template>
