<script setup lang="ts"></script>

<template>
  <div class="action-bar">
    <button class="play-button">
      <svg
        role="img"
        height="28"
        width="28"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
        ></path>
      </svg>
    </button>
    <button class="action-btn follow-btn">Takip Ediliyor</button>
    <button class="action-btn more-btn">•••</button>
  </div>
</template>

<style scoped>
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
</style>
