<template>
  <div>
    <!-- Bouton hamburger pour mobile -->
    <button
      class="md:hidden p-2 m-2 rounded bg-gray-200"
      @click="open = !open"
      aria-label="Ouvrir le menu"
    >
      <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 left-0 h-full bg-white shadow-md z-40 transition-transform duration-200',
        open ? 'translate-x-0' : '-translate-x-full',
        'w-64 md:translate-x-0 md:static md:block'
      ]"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <router-link to="/users" class="py-2 px-4 rounded hover:bg-gray-100 text-left block">Users</router-link>
          </li>
          <li>
            <router-link to="/entities" class="py-2 px-4 rounded hover:bg-gray-100 text-left block">Entities</router-link>
          </li>
          <li>
            <router-link to="/userentities" class="py-2 px-4 rounded hover:bg-gray-100 text-left block">UserEntities</router-link>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Overlay pour mobile -->
    <div
      v-if="open"
      class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
      @click="open = false"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>