<template>
  <button class="app-icon-button" :class="{ 'active': active }">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.app-icon-button {
  background: transparent;
  border: none;
  color: #b3b3b3;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.app-icon-button:hover {
  color: white;
  background-color: #1f1f1f;
  transform: scale(1.04);
}

.app-icon-button.active {
  background-color: #1f1f1f;
  color: white;
}
</style>
