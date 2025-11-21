<template>
  <div class="left-side-card-view">
    <div class="content-wrapper">
      <LibrarySidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import LibrarySidebar from '../components/organisms/LibrarySidebar.vue'
</script>

<style scoped>
.left-side-card-view {
  min-height: 100vh;
  background-color: #000;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.content-wrapper {
  height: calc(100vh - 32px);
  width: 100%;
  max-width: 420px;
}
</style>
