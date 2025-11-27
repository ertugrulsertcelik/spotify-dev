<script setup lang="ts">
defineProps<{
  popularSongs: Array<{
    id: number
    title: string
    plays: string
    duration: string
    image: string
  }>
}>()
</script>

<template>
  <div class="popular-section">
    <h2>Popüler</h2>
    <div class="songs-list">
      <div v-for="(song, index) in popularSongs" :key="song.id" class="song-row">
        <div class="song-index">{{ index + 1 }}</div>
        <div class="song-info">
          <img :src="song.image" alt="" class="song-img" />
          <span class="song-title">{{ song.title }}</span>
        </div>
        <div class="song-plays">{{ song.plays }}</div>
        <div class="song-duration">
          <span class="heart-icon">♡</span>
          {{ song.duration }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.song-row {
  display: grid;
  grid-template-columns: 16px 4fr 2fr 1fr;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  color: #b3b3b3;
  font-size: 14px;
}

.song-row:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.song-index {
  color: #b3b3b3;
}

.song-info {
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
}

.song-img {
  width: 40px;
  height: 40px;
}

.song-title {
  font-size: 16px;
}

.song-plays {
  font-variant-numeric: tabular-nums;
}

.song-duration {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  font-variant-numeric: tabular-nums;
}

.heart-icon {
  opacity: 0;
}

.song-row:hover .heart-icon {
  opacity: 1;
}
</style>
