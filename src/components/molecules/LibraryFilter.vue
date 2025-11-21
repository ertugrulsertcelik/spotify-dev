<template>
  <div class="library-filters">
    <button 
      v-for="filter in filters" 
      :key="filter"
      class="filter-chip"
      :class="{ 'active': activeFilter === filter }"
      @click="setFilter(filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['change'])

const filters = ['Playlists', "Podcast'ler ve Programlar"]
const activeFilter = ref('')

const setFilter = (filter: string) => {
  if (activeFilter.value === filter) {
    activeFilter.value = '' // Toggle off
    emit('change', '')
  } else {
    activeFilter.value = filter
    emit('change', filter)
  }
}
</script>

<style scoped>
.library-filters {
  display: flex;
  gap: 8px;
  padding: 0 16px 16px;
  overflow-x: auto;
}

.filter-chip {
  background-color: #2a2a2a;
  color: white;
  border: none;
  border-radius: 32px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.filter-chip:hover {
  background-color: #3a3a3a;
}

.filter-chip.active {
  background-color: white;
  color: black;
}
</style>
