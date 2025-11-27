<script setup lang="ts">
defineProps<{
  currentSong: {
    title: string
    artist: string
    image: string
  }
}>()
</script>

<template>
  <div class="current-song-card">
    <img :src="currentSong.image" alt="Album Cover" class="album-cover" />
    <div class="song-details">
      <div class="song-info">
        <h3 class="song-title">{{ currentSong.title }}</h3>
        <p class="song-artist">{{ currentSong.artist }}</p>
      </div>
      <div class="song-actions">
        <span class="check-icon">ok</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.current-song-card {
  margin-bottom: 24px;
}

.album-cover {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  margin-bottom: 16px;
  object-fit: cover;
}

.song-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.song-info {
  flex: 1;
}

.song-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 4px 0;
  line-height: 1.2;
  color: white;
}

.song-artist {
  color: #b3b3b3;
  font-size: 1rem;
  margin: 0;
}

.check-icon {
  background: #1db954;
  color: black;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}
</style>
