<template>
<aside class="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0 z-50">
    <div class="p-4">
        <h1 class="text-xl font-bold">Sidebar</h1>
        <ul class="mt-4">
            <li class="mb-2">
                <router-link to="/users" class="block px-4 py-2 rounded hover:bg-gray-700">Users</router-link>
            </li>
            <li class="mb-2">
                <router-link to="/entities" class="block px-4 py-2 rounded hover:bg-gray-700">Entities</router-link>
            </li>
            <li class="mb-2">
                <router-link to="/userentities" class="block px-4 py-2 rounded hover:bg-gray-700">UserEntities</router-link>
            </li>
        </ul>
    </div>
    <button @click="open = !open" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded">
        Toggle
    </button>
</aside>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>