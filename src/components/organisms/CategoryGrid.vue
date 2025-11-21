<template>
  <div class="category-grid-section">
    <CategoryFilters @change="handleFilterChange" />
    <div class="category-grid">
      <SmallMediaCard
        v-for="(item, index) in filteredItems"
        :key="index"
        :image-src="item.imageSrc"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CategoryFilters from '../molecules/CategoryFilters.vue'
import SmallMediaCard from '../molecules/SmallMediaCard.vue'

interface CategoryItem {
  imageSrc: string
  title: string
  category?: string
}

const props = defineProps({
  items: {
    type: Array as () => CategoryItem[],
    required: true
  }
})

const activeFilter = ref('Tümü')

const handleFilterChange = (filter: string) => {
  activeFilter.value = filter
}

const filteredItems = computed(() => {
  if (activeFilter.value === 'Tümü') {
    return props.items
  }
  return props.items.filter(item => item.category === activeFilter.value)
})
</script>

<style scoped>
.category-grid-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr)); /* Responsive grid */
  gap: 12px;
}

/* Adjust for smaller screens */
@media (max-width: 600px) {
  .category-grid {
    grid-template-columns: 1fr;
  }
}
</style>
