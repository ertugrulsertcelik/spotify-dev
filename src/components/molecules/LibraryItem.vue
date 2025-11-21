<template>
  <div class="library-item" :class="{ 'active': active }">
    <div class="image-wrapper">
      <img :src="imageSrc" :alt="title" class="item-image" />
      <div v-if="isLiked" class="liked-overlay">
        <AppIcon name="heart-filled" size="16" />
      </div>
    </div>
    <div class="content">
      <div class="title-row">
        <span class="title" :class="{ 'active-text': active }">{{ title }}</span>
      </div>
      <div class="subtitle-row">
        <AppIcon v-if="pinned" name="pin-filled" size="12" class="pin-icon" />
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>
    <div v-if="playing" class="playing-indicator">
      <AppIcon name="volume-up" size="16" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '../atoms/AppIcon.vue'

defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  pinned: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  playing: {
    type: Boolean,
    default: false
  },
  isLiked: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.library-item {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  gap: 12px;
}

.library-item:hover {
  background-color: #1a1a1a;
}

.library-item.active {
  background-color: #232323;
}

.image-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.liked-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #450af5, #c4efd9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title.active-text {
  color: #1ed760;
}

.subtitle-row {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #b3b3b3;
  font-size: 0.875rem;
}

.pin-icon {
  color: #1ed760;
  transform: rotate(45deg);
}

.subtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
