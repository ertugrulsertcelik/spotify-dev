<template>
  <div class="media-card">
    <div class="image-wrapper">
      <img :src="imageSrc" :alt="title" class="media-image" />
      <!-- Optional: Play button overlay could go here -->
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.media-card {
  width: 180px; /* Fixed width */
  flex: 0 0 auto; /* Prevent shrinking/growing */
  padding: 16px;
  background-color: #181818;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-snap-align: start;
}

.media-card:hover {
  background-color: #282828;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.5);
}

.media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  color: white;
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.description {
  color: #a7a7a7;
  font-size: 0.875rem;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  line-height: 1.5;
}
</style>
