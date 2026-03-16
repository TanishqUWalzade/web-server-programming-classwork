<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <NavBar />
  <div class="layout">
    <SideBar />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}

.container {
  flex: 1;
}
</style>