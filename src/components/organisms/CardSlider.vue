<template>
  <div class="card-slider-section">
    <div class="header-row">
      <h2 v-if="title" class="section-title">{{ title }}</h2>
    </div>
    
    <div class="slider-container" @mouseenter="showControls = true" @mouseleave="showControls = false">
      <button 
        class="nav-btn prev" 
        :disabled="!canScrollLeft"
        @click="scroll('left')"
        v-show="canScrollLeft"
      >
        <AppIcon name="chevron-left" size="24" />
      </button>
      
      <div class="card-slider" ref="sliderRef" @scroll="checkScroll">
        <MediaCard
          v-for="(item, index) in items"
          :key="index"
          :image-src="item.imageSrc"
          :title="item.title"
          :description="item.description"
        />
      </div>

      <button 
        class="nav-btn next" 
        :disabled="!canScrollRight"
        @click="scroll('right')"
        v-show="canScrollRight"
      >
        <AppIcon name="chevron-right" size="24" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MediaCard from '../molecules/MediaCard.vue'
import AppIcon from '../atoms/AppIcon.vue'

interface MediaItem {
  imageSrc: string
  title: string
  description: string
}

defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array as () => MediaItem[],
    required: true
  }
})

const sliderRef = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)
const showControls = ref(false)

const checkScroll = () => {
  if (!sliderRef.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = sliderRef.value
  canScrollLeft.value = scrollLeft > 0
  // Allow a small buffer (1px) for float calculation differences
  canScrollRight.value = scrollLeft + clientWidth < scrollWidth - 1
}

const scroll = (direction: 'left' | 'right') => {
  if (!sliderRef.value) return
  
  const scrollAmount = sliderRef.value.clientWidth * 0.8 // Scroll 80% of width
  const targetScroll = sliderRef.value.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
  
  sliderRef.value.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  })
}

onMounted(() => {
  checkScroll()
  window.addEventListener('resize', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScroll)
})
</script>

<style scoped>
.card-slider-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  position: relative;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.section-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.slider-container {
  position: relative;
  width: 100%;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: #2a2a2a;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  transition: transform 0.2s ease, background-color 0.2s ease, opacity 0.2s ease;
}

.nav-btn:hover {
  background-color: #3a3a3a;
  transform: translateY(-50%) scale(1.1);
}

.nav-btn.prev {
  left: -20px; /* Hang slightly off or adjust to 0 */
}

.nav-btn.next {
  right: -20px;
}

/* Adjust for smaller screens if needed, or keep inside */
@media (max-width: 768px) {
  .nav-btn.prev { left: 0; }
  .nav-btn.next { right: 0; }
}

.card-slider {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 0 0 16px 0;
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}

.card-slider::-webkit-scrollbar {
  display: none;
}
</style>
