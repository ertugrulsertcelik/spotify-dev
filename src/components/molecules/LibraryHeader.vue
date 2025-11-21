<template>
  <div class="library-header">
    <div class="title-section">
      <AppIcon name="library" size="24" class="icon" />
      <span class="title">Kitaplığın</span>
    </div>
    <div class="actions">
      <button class="action-btn">
        <AppIcon name="plus" size="20" />
      </button>
      <button class="action-btn">
        <AppIcon name="arrow-right" size="20" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '../atoms/AppIcon.vue'
</script>

<style scoped>
.library-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  color: #b3b3b3;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.title-section:hover {
  color: white;
}

.title {
  font-weight: 700;
  font-size: 1rem;
}

.actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.action-btn:hover {
  background-color: #2a2a2a;
  color: white;
}
</style>
