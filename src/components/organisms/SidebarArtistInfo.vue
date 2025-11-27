<script setup lang="ts">
defineProps<{
  artist: {
    image: string
  }
}>()
</script>

<template>
  <div class="about-artist-section">
    <h3>Sanatçı hakkında</h3>
    <div class="artist-card">
      <img :src="artist.image" alt="Artist" class="artist-img" />
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

.artist-card {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.artist-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
