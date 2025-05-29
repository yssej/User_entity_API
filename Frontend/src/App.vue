<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/SideBar.vue'
import Content from './components/Content.vue'
</script>

<template>
  <SideBar />
  <div class="p-6 md:ml-64 transition-all duration-300">
    <router-view />
  </div>
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>

</style>
