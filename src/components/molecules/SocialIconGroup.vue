<template>
  <div class="social-icon-group">
    <button class="social-btn">
      <AppIcon name="instagram" size="20" />
    </button>
    <button class="social-btn">
      <AppIcon name="twitter" size="20" />
    </button>
    <button class="social-btn">
      <AppIcon name="facebook" size="20" />
    </button>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '../atoms/AppIcon.vue'
</script>

<style scoped>
.social-icon-group {
  display: flex;
  gap: 16px;
}

.social-btn {
  background-color: #292929;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: background-color 0.2s ease;
}

.social-btn:hover {
  background-color: #727272;
}
</style>
