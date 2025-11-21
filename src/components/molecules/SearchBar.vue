<template>
  <div class="search-bar" :class="{ 'focused': isFocused }">
    <div class="search-icon-wrapper">
      <AppIcon name="search" size="24" class="search-icon" />
    </div>
    <input
      type="text"
      placeholder="Ne çalmak istiyorsun?"
      class="search-input"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
    <div class="divider"></div>
    <div class="browse-icon-wrapper">
      <AppIcon name="browse" size="24" class="browse-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from '../atoms/AppIcon.vue'

const isFocused = ref(false)
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  border-radius: 500px;
  height: 32px;
  width: 100%;
  max-width: 475px; /* Approximate width */
  transition: background-color 0.2s ease;
  border: 1px solid transparent;
}

.search-bar:hover {
  background-color: #2a2a2a;
  border-color: #333;
}

.search-bar.focused {
  background-color: #2a2a2a;
  border-color: white;
}

.search-icon-wrapper,
.browse-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  color: #b3b3b3;
}

.search-icon, .browse-icon {
  color: #b3b3b3;
}

.search-bar:hover .search-icon,
.search-bar:hover .browse-icon,
.search-bar.focused .search-icon,
.search-bar.focused .browse-icon {
  color: white;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  outline: none;
  padding: 0;
}

.search-input::placeholder {
  color: #b3b3b3;
}

.divider {
  width: 1px;
  height: 24px;
  background-color: #7c7c7c;
  margin: 0 4px;
}
</style>
