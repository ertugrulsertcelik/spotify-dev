<script setup lang="ts">
defineProps<{
  relatedVideos: Array<{
    id: number
    title: string
    artists: string
    image: string
  }>
}>()
</script>

<template>
  <div class="related-videos-section">
    <h3>İlgili müzik videoları</h3>
    <div class="video-list">
      <div v-for="video in relatedVideos" :key="video.id" class="video-item">
        <div class="video-thumbnail">
          <img :src="video.image" alt="Video Thumbnail" />
        </div>
        <div class="video-info">
          <p class="video-title">{{ video.title }}</p>
          <p class="video-artists">{{ video.artists }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
}

.related-videos-section {
  margin-bottom: 24px;
}

.video-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.video-item {
  display: flex;
  gap: 12px;
  align-items: center;
}

.video-thumbnail {
  width: 120px;
  height: 68px;
  flex-shrink: 0;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.video-info {
  overflow: hidden;
}

.video-title {
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
}

.video-artists {
  font-size: 0.75rem;
  color: #b3b3b3;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
