<template>
  <div class="small-media-card">
    <div class="image-wrapper">
      <img :src="imageSrc" :alt="title" class="media-image" />
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
    </div>
    <div class="play-button-overlay">
      <button class="play-btn">
        <AppIcon name="play-filled" size="20" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '../atoms/AppIcon.vue'

defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.small-media-card {
  display: flex;
  align-items: center;
  background-color: #2a2a2a; /* Slightly lighter than black */
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
  height: 80px; /* Fixed height */
}

.small-media-card:hover {
  background-color: #3a3a3a;
}

.image-wrapper {
  height: 100%;
  aspect-ratio: 1;
  flex-shrink: 0;
}

.media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 0 16px;
  flex: 1;
  overflow: hidden;
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

.play-button-overlay {
  position: absolute;
  right: 16px;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform: translateY(4px);
  box-shadow: 0 8px 8px rgba(0,0,0,0.3);
  border-radius: 50%;
}

.small-media-card:hover .play-button-overlay {
  opacity: 1;
  transform: translateY(0);
}

.play-btn {
  background-color: #1ed760; /* Spotify Green */
  color: black;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-left: 4px; /* Visual center adjustment for play icon */
}

.play-btn:hover {
  transform: scale(1.05);
  background-color: #1fdf64;
}
</style>
