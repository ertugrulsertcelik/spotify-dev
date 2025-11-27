<script setup lang="ts">
import ArtistHeader from '../components/organisms/ArtistHeader.vue'
import ArtistActionBar from '../components/organisms/ArtistActionBar.vue'
import ArtistPopularSongs from '../components/organisms/ArtistPopularSongs.vue'
import ArtistPick from '../components/organisms/ArtistPick.vue'

const artist = {
  name: 'Sagopa Kajmer',
  listeners: '3.032.715',
  isVerified: true,
  image: '/sagopa-header.png', // Local generated image
}

const popularSongs = [
  {
    id: 1,
    title: 'Merhametine Dön (2021 Tek Edit)',
    plays: '66.719.155',
    duration: '3:22',
    image: 'https://placehold.co/40',
  },
  {
    id: 2,
    title: 'Ateşten Gömlek',
    plays: '95.808.581',
    duration: '4:46',
    image: 'https://placehold.co/40',
  },
  {
    id: 3,
    title: 'Bir Ateşe Attın Beni',
    plays: '28.988.969',
    duration: '5:33',
    image: 'https://placehold.co/40',
  },
  {
    id: 4,
    title: 'Oldu Olanlar - Sago K 2022 Remix',
    plays: '22.941.698',
    duration: '4:16',
    image: 'https://placehold.co/40',
  },
  {
    id: 5,
    title: 'Galiba - Orijinal Rap Versiyon',
    plays: '80.126.682',
    duration: '5:00',
    image: 'https://placehold.co/40',
  },
]

const artistPick = {
  image: 'https://placehold.co/70',
  type: 'Albüm',
  title: 'Üzgün Şarkılar',
  author: 'Nun Sultan "Üzgün Şarkılar" Yayında',
}
</script>

<template>
  <div class="artist-view">
    <!-- Header Section -->
    <ArtistHeader :artist="artist" />

    <!-- Action Bar -->
    <ArtistActionBar />

    <div class="content-layout">
      <!-- Popular Songs -->
      <ArtistPopularSongs :popularSongs="popularSongs" />

      <!-- Artist Pick -->
      <ArtistPick :artistPick="artistPick" />
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
</style>
