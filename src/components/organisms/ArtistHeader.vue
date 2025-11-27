<script setup lang="ts">
defineProps<{
  artist: {
    name: string
    listeners: string
    isVerified: boolean
    image: string
  }
}>()
</script>

<template>
  <div
    class="artist-header"
    :style="{
      backgroundImage: `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url('${artist.image}')`,
    }"
  >
    <div class="header-content">
      <div v-if="artist.isVerified" class="verified-badge">
        <span class="verified-icon">✓</span>
        <span>Doğrulanmış Sanatçı</span>
      </div>
      <h1 class="artist-name">{{ artist.name }}</h1>
      <p class="listeners">Aylık {{ artist.listeners }} dinleyici</p>
    </div>
  </div>
</template>

<style scoped>
.artist-header {
  height: 40vh;
  min-height: 340px;
  background-size: cover;
  background-position: center 20%;
  display: flex;
  align-items: flex-end;
  padding: 24px;
}

.header-content {
  margin-bottom: 16px;
}

.verified-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  margin-bottom: 8px;
}

.verified-icon {
  background: #3d91f4;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.artist-name {
  font-size: 6rem;
  font-weight: 900;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.04em;
}

.listeners {
  font-size: 1rem;
  margin-top: 16px;
  font-weight: 500;
}
</style>
