<template>
  <div class="category-view">
    <div class="content-wrapper">
      <CategoryGrid :items="categoryItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryGrid from '../components/organisms/CategoryGrid.vue'

const categoryItems = [
  {
    imageSrc: 'javascript:void(0)',
    title: 'White Noise 10 Hours',
    category: "Podcast'ler"
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Sara Qədimova',
    category: 'Müzik'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'My. New Way',
    category: 'Müzik'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Shake Shook Shaken',
    category: 'Müzik'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Yıldız Tilbe',
    category: 'Müzik'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'manifest',
    category: "Podcast'ler"
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Yol',
    category: 'Müzik'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Zeki Müren',
    category: 'Müzik'
  }
]
</script>

<style scoped>
.category-view {
  min-height: 100vh;
  background-color: #121212;
  padding: 32px;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
}
</style>
