<script setup lang="ts">
import { ref } from 'vue'

const artist = {
  name: 'Sagopa Kajmer',
  listeners: '3.032.715',
  isVerified: true,
  image: '/sagopa-header.png' // Local generated image
}

const popularSongs = [
  { id: 1, title: 'Merhametine Dön (2021 Tek Edit)', plays: '66.719.155', duration: '3:22', image: 'https://placehold.co/40' },
  { id: 2, title: 'Ateşten Gömlek', plays: '95.808.581', duration: '4:46', image: 'https://placehold.co/40' },
  { id: 3, title: 'Bir Ateşe Attın Beni', plays: '28.988.969', duration: '5:33', image: 'https://placehold.co/40' },
  { id: 4, title: 'Oldu Olanlar - Sago K 2022 Remix', plays: '22.941.698', duration: '4:16', image: 'https://placehold.co/40' },
  { id: 5, title: 'Galiba - Orijinal Rap Versiyon', plays: '80.126.682', duration: '5:00', image: 'https://placehold.co/40' },
]

const artistPick = {
  image: 'https://placehold.co/70',
  type: 'Albüm',
  title: 'Üzgün Şarkılar',
  author: 'Nun Sultan "Üzgün Şarkılar" Yayında'
}
</script>

<template>
  <div class="artist-view">
    <!-- Header Section -->
    <div class="artist-header">
      <div class="header-content">
        <div v-if="artist.isVerified" class="verified-badge">
          <span class="verified-icon">✓</span>
          <span>Doğrulanmış Sanatçı</span>
        </div>
        <h1 class="artist-name">{{ artist.name }}</h1>
        <p class="listeners">Aylık {{ artist.listeners }} dinleyici</p>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="action-bar">
      <button class="play-button">
        <svg role="img" height="28" width="28" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
      </button>
      <button class="action-btn follow-btn">Takip Ediliyor</button>
      <button class="action-btn more-btn">•••</button>
    </div>

    <div class="content-layout">
      <!-- Popular Songs -->
      <div class="popular-section">
        <h2>Popüler</h2>
        <div class="songs-list">
          <div v-for="(song, index) in popularSongs" :key="song.id" class="song-row">
            <div class="song-index">{{ index + 1 }}</div>
            <div class="song-info">
              <img :src="song.image" alt="" class="song-img">
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

      <!-- Artist Pick -->
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
    </div>
  </div>
</template>

<style scoped>
.artist-view {
  color: white;
  background: #121212;
  min-height: 100vh;
  padding-bottom: 2rem;
  padding-left: 2rem; /* Added padding to move content more to the middle */
  padding-right: 2rem;
}

.artist-header {
  height: 40vh;
  min-height: 340px;
  background-image: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%), url('/sagopa-header.png'); /* Placeholder URL */
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

.action-bar {
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.play-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #1db954;
  border: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s;
}

.play-button:hover {
  transform: scale(1.05);
  background-color: #1ed760;
}

.action-btn {
  background: transparent;
  border: 1px solid #727272;
  color: white;
  padding: 7px 15px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.action-btn:hover {
  border-color: white;
}

.more-btn {
  border: none;
  font-size: 24px;
  color: #b3b3b3;
  padding: 0;
}

.more-btn:hover {
  color: white;
}

.content-layout {
  display: flex;
  padding: 0 24px;
  gap: 40px;
}

.popular-section {
  flex: 3;
}

.artist-pick-section {
  flex: 1.5;
}

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
  background-color: rgba(255,255,255,0.1);
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

/* Artist Pick Card */
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
