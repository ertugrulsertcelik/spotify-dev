<template>
  <div class="footer-view">
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '../components/organisms/AppFooter.vue'
</script>

<style scoped>
.footer-view {
  min-height: 100vh;
  background-color: #000; /* Page background */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-spacer {
  flex: 1;
}
</style>
