<template>
  <div class="category-filters">
    <button 
      v-for="filter in filters" 
      :key="filter"
      class="filter-btn"
      :class="{ 'active': activeFilter === filter }"
      @click="setFilter(filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filters = ['Tümü', 'Müzik', "Podcast'ler"]
const activeFilter = ref('Tümü')

const emit = defineEmits(['change'])

const setFilter = (filter: string) => {
  activeFilter.value = filter
  emit('change', filter)
}
</script>

<style scoped>
.category-filters {
  display: flex;
  gap: 8px;
  padding: 8px 0;
}

.filter-btn {
  background-color: #2a2a2a;
  color: white;
  border: none;
  border-radius: 32px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.filter-btn:hover {
  background-color: #3a3a3a;
}

.filter-btn.active {
  background-color: white;
  color: black;
}
</style>
