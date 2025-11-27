<script setup lang="ts">
defineProps<{
  song: {
    title: string
    artist: string
    image: string
  }
}>()
</script>

<template>
  <div class="player-left">
    <img :src="song.image" alt="Cover" class="cover-img" />
    <div class="song-info">
      <div class="song-title-row">
        <span class="title">{{ song.title }}</span>
        <span class="verified-icon">✓</span>
      </div>
      <span class="artist">{{ song.artist }}</span>
    </div>
  </div>
</template>

<style scoped>
.player-left {
  display: flex;
  align-items: center;
  width: 30%;
  min-width: 180px;
}

.cover-img {
  height: 56px;
  width: 56px;
  border-radius: 4px;
  margin-right: 14px;
  object-fit: cover;
}

.song-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.song-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title {
  font-size: 14px;
  font-weight: 500;
  color: white;
}

.verified-icon {
  background: #1db954;
  color: black;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
}

.artist {
  font-size: 11px;
  color: #b3b3b3;
  margin-top: 2px;
}
</style>
