<template>
  <div class="header-view">
    <AppHeader />
    <div class="content-placeholder">
      <!-- Content would go here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/organisms/AppHeader.vue'
</script>

<style scoped>
.header-view {
  min-height: 100vh;
  background-color: #121212;
}

.content-placeholder {
  padding: 24px;
  color: white;
}
</style>
