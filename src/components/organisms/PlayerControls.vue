<script setup lang="ts">
defineProps<{
  song: {
    duration: string
    current: string
  }
  progress: number
}>()
</script>

<template>
  <div class="player-center">
    <div class="player-controls">
      <button class="control-btn shuffle active">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"
          ></path>
          <path
            d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.829-2.829 2.829a.75.75 0 11-1.06-1.06l1.017-1.018H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"
          ></path>
        </svg>
        <span class="dot"></span>
      </button>
      <button class="control-btn prev">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M3.3 8l8.7 5V3L3.3 8z"></path>
        </svg>
      </button>
      <button class="control-btn play-pause">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"
          ></path>
        </svg>
      </button>
      <button class="control-btn next">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M12.7 8l-8.7 5V3l8.7 5z"></path>
        </svg>
      </button>
      <button class="control-btn repeat">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75h-.36l2.305 2.305a.75.75 0 11-1.06 1.06L9.94 13.66a.75.75 0 010-1.06l3.194-3.195a.75.75 0 111.06 1.06l-2.305 2.305h.36a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5a2.25 2.25 0 00-2.25 2.25v5c0 1.24.996 2.228 2.228 2.25.41.007.73.35.722.76a.75.75 0 01-.772.74 3.75 3.75 0 01-3.678-3.75v-5z"
          ></path>
        </svg>
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
</template>

<style scoped>
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
</style>
