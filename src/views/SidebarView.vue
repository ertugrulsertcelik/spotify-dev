<script setup lang="ts">
const currentSong = {
  title: 'Merhametine Dön (2021 Tek Edit)',
  artist: 'Sagopa Kajmer',
  image: 'https://placehold.co/300x300/8b0000/ffffff?text=TEK', // Placeholder matching the red cover
  isLiked: true
}

const relatedVideos = [
  {
    id: 1,
    title: 'Bir Ateşe Attın Beni',
    artists: 'Kamuran Akkor, Sagopa...',
    image: 'https://placehold.co/160x90'
  },
  {
    id: 2,
    title: 'Elbet',
    artists: 'Sagopa Kajmer, Ramiz',
    image: 'https://placehold.co/160x90'
  }
]

const aboutArtist = {
  image: '/sagopa-header.png' // Reusing the generated image
}
</script>

<template>
  <div class="sidebar-view">
    <div class="section-header">
      <h2>{{ currentSong.title }}</h2>
    </div>

    <div class="current-song-card">
      <img :src="currentSong.image" alt="Album Cover" class="album-cover">
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

    <div class="related-videos-section">
      <h3>İlgili müzik videoları</h3>
      <div class="video-list">
        <div v-for="video in relatedVideos" :key="video.id" class="video-item">
          <div class="video-thumbnail">
            <img :src="video.image" alt="Video Thumbnail">
          </div>
          <div class="video-info">
            <p class="video-title">{{ video.title }}</p>
            <p class="video-artists">{{ video.artists }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="about-artist-section">
      <h3>Sanatçı hakkında</h3>
      <div class="artist-card">
        <img :src="aboutArtist.image" alt="Artist" class="artist-img">
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-view {
  background-color: #121212;
  color: white;
  padding: 16px;
  height: 100vh;
  overflow-y: auto;
  font-family: 'Circular', sans-serif;
}

.section-header h2 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.song-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 4px 0;
  line-height: 1.2;
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
}

.video-artists {
  font-size: 0.75rem;
  color: #b3b3b3;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
