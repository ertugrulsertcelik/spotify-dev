<template>
  <main class="register-view">
    <RegisterCard />
  </main>
</template>

<script setup lang="ts">
import RegisterCard from '../components/organisms/RegisterCard.vue'
</script>

<style scoped>
.register-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);
  background-color: #121212;
  padding: 32px;
}
</style>
