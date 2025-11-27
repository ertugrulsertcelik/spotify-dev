<script setup lang="ts">
defineProps<{
  artistPick: {
    image: string
    type: string
    title: string
    author: string
  }
}>()
</script>

<template>
  <div class="artist-pick-section">
    <h2>Sanatçının seçtikleri</h2>
    <div class="artist-pick-card">
      <div class="pick-header">
        <img :src="artistPick.image" class="pick-author-img" />
        <span>{{ artistPick.author }}</span>
      </div>
      <div class="pick-content">
        <img :src="artistPick.image" class="pick-cover" />
        <div class="pick-details">
          <div class="pick-title">{{ artistPick.title }}</div>
          <div class="pick-type">{{ artistPick.type }}</div>
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

.artist-pick-card {
  background: #181818; /* Slightly lighter than bg */
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.artist-pick-card:hover {
  background: #282828;
}

.pick-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 0.875rem;
  color: #b3b3b3;
}

.pick-author-img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.pick-content {
  display: flex;
  gap: 12px;
}

.pick-cover {
  width: 76px;
  height: 76px;
  border-radius: 4px;
}

.pick-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pick-title {
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
}

.pick-type {
  font-size: 0.875rem;
  color: #b3b3b3;
}
</style>
