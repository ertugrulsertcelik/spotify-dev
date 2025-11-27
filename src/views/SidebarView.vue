<script setup lang="ts">
import SidebarCurrentSong from '../components/organisms/SidebarCurrentSong.vue'
import SidebarRelatedVideos from '../components/organisms/SidebarRelatedVideos.vue'
import SidebarArtistInfo from '../components/organisms/SidebarArtistInfo.vue'

const currentSong = {
  title: 'Ateşten Gömlek',
  artist: 'Sagopa Kajmer',
  image: 'https://placehold.co/300x300/8b0000/ffffff?text=TEK', // Placeholder matching the red cover
  isLiked: true,
}

const relatedVideos = [
  {
    id: 1,
    title: 'Bir Ateşe Attın Beni',
    artists: 'Kamuran Akkor, Sagopa...',
    image: 'https://placehold.co/160x90',
  },
  {
    id: 2,
    title: 'Elbet',
    artists: 'Sagopa Kajmer, Ramiz',
    image: 'https://placehold.co/160x90',
  },
]

const aboutArtist = {
  image: '/sagopa-header.png', // Reusing the generated image
}
</script>

<template>
  <div class="sidebar-view">
    <div class="section-header">
      <h2>{{ currentSong.title }}</h2>
    </div>

    <SidebarCurrentSong :currentSong="currentSong" />

    <SidebarRelatedVideos :relatedVideos="relatedVideos" />

    <SidebarArtistInfo :artist="aboutArtist" />
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
  width: 20%;
  min-width: 250px;
  position: fixed;
  right: 0;
  top: 0;
  border-left: 1px solid #282828;
}

.section-header h2 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
