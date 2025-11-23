<script setup lang="ts">
import { ref } from 'vue'

const song = {
  title: 'Ateşten Gömlek',
  artist: 'Sagopa Kajmer',
  image: 'https://placehold.co/56x56/333/fff?text=Cover', // Placeholder
  duration: '4:46',
  current: '2:08'
}

const volume = ref(80)
const progress = ref(45) // Approx percentage for 2:08/4:46
</script>

<template>
  <div class="player-view">
    <!-- Left: Song Info -->
    <div class="player-left">
      <img :src="song.image" alt="Cover" class="cover-img">
      <div class="song-info">
        <div class="song-title-row">
          <span class="title">{{ song.title }}</span>
          <span class="verified-icon">✓</span>
        </div>
        <span class="artist">{{ song.artist }}</span>
      </div>
    </div>

    <!-- Center: Controls -->
    <div class="player-center">
      <div class="player-controls">
        <button class="control-btn shuffle active">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path><path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.829-2.829 2.829a.75.75 0 11-1.06-1.06l1.017-1.018H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path></svg>
          <span class="dot"></span>
        </button>
        <button class="control-btn prev">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.3 8l8.7 5V3L3.3 8z"></path></svg>
        </button>
        <button class="control-btn play-pause">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>
        </button>
        <button class="control-btn next">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 8l-8.7 5V3l8.7 5z"></path></svg>
        </button>
        <button class="control-btn repeat">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75h-.36l2.305 2.305a.75.75 0 11-1.06 1.06L9.94 13.66a.75.75 0 010-1.06l3.194-3.195a.75.75 0 111.06 1.06l-2.305 2.305h.36a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5a2.25 2.25 0 00-2.25 2.25v5c0 1.24.996 2.228 2.228 2.25.41.007.73.35.722.76a.75.75 0 01-.772.74 3.75 3.75 0 01-3.678-3.75v-5z"></path></svg>
        </button>
      </div>
      <div class="playback-bar">
        <span class="time current">{{ song.current }}</span>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" :style="{ width: progress + '%' }"></div>
        </div>
        <span class="time total">{{ song.duration }}</span>
      </div>
    </div>

    <!-- Right: Extras -->
    <div class="player-right">
      <button class="extra-btn lyrics active">
         <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63.275 63.275 0 007.742 4.5c-.776 0-1.556.11-2.3.33a1.126 1.126 0 00-.36.15L2.953 7.119a1.5 1.5 0 000 2.121l2.86 2.86a1.5 1.5 0 002.12 0l2.14-2.14a1.126 1.126 0 00.15-.36c.22-.744.33-1.524.33-2.3 0-.385-.015-.77-.053-1.182z"></path></svg>
         <span class="dot"></span>
      </button>
      <button class="extra-btn queue">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 012.5 2.5v.5h-14v-.5z"></path></svg>
      </button>
      <button class="extra-btn device">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path><path d="M13 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      </button>
      <div class="volume-control">
        <button class="extra-btn volume">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.741.534A2 2 0 008 2v12a2 2 0 001.741 1.466l4 1.333a2 2 0 002.63-1.899V1.1a2 2 0 00-2.63-1.9L9.74.535zM9.5 2a.5.5 0 01.435-.366l4-1.333a.5.5 0 01.657.475v14.448a.5.5 0 01-.657.475l-4-1.333A.5.5 0 019.5 14V2z"></path><path d="M5 3H3v10h2V3zM2 4H1v8h1V4z"></path></svg>
        </button>
        <div class="volume-bar-bg">
          <div class="volume-bar-fill" :style="{ width: volume + '%' }"></div>
        </div>
      </div>
      <button class="extra-btn fullscreen">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6.53 9.47a.75.75 0 010 1.06l-2.72 2.72h1.018a.75.75 0 010 1.5H1.25a.75.75 0 01-.75-.75V10.18a.75.75 0 011.5 0v1.018l2.72-2.72a.75.75 0 011.06 0zM9.47 6.53a.75.75 0 011.06 0l2.72 2.72V8.232a.75.75 0 011.5 0v3.768a.75.75 0 01-.75.75H10.18a.75.75 0 010-1.5h1.018l-2.72-2.72a.75.75 0 010-1.06zM6.53 6.53a.75.75 0 01-1.06 0l-2.72-2.72V4.82a.75.75 0 01-1.5 0V1.052A.75.75 0 012.002.302h3.768a.75.75 0 010 1.5H4.752l2.72 2.72a.75.75 0 010 1.06zM9.47 9.47a.75.75 0 010-1.06l2.72-2.72h-1.018a.75.75 0 110-1.5h3.768a.75.75 0 01.75.75v3.768a.75.75 0 11-1.5 0V7.768l-2.72 2.72a.75.75 0 01-1.06 0z"></path></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.player-view {
  background-color: black;
  color: white;
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-top: 1px solid #282828;
  box-sizing: border-box;
}

/* Left Section */
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

/* Center Section */
.player-center {
  width: 40%;
  max-width: 722px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.player-controls {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
}

.control-btn {
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.control-btn:hover {
  color: white;
}

.control-btn.active {
  color: #1db954;
}

.control-btn.play-pause {
  background: white;
  color: black;
  border-radius: 50%;
  width: 32px;
  height: 32px;
}

.control-btn.play-pause:hover {
  transform: scale(1.05);
}

.dot {
  position: absolute;
  bottom: -6px;
  width: 4px;
  height: 4px;
  background-color: #1db954;
  border-radius: 50%;
}

.playback-bar {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #a7a7a7;
}

.progress-bar-bg {
  flex-grow: 1;
  height: 4px;
  background-color: #4d4d4d;
  border-radius: 2px;
  position: relative;
}

.progress-bar-fill {
  height: 100%;
  background-color: white;
  border-radius: 2px;
}

.progress-bar-bg:hover .progress-bar-fill {
  background-color: #1db954;
}

/* Right Section */
.player-right {
  width: 30%;
  min-width: 180px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}

.extra-btn {
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
}

.extra-btn:hover {
  color: white;
}

.extra-btn.active {
  color: #1db954;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 120px;
}

.volume-bar-bg {
  flex-grow: 1;
  height: 4px;
  background-color: #4d4d4d;
  border-radius: 2px;
}

.volume-bar-fill {
  height: 100%;
  background-color: white;
  border-radius: 2px;
}

.volume-bar-bg:hover .volume-bar-fill {
  background-color: #1db954;
}
</style>
