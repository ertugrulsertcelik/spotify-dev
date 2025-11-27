<script setup lang="ts">
import { ref } from 'vue'
import PlayerCurrentTrack from '../components/organisms/PlayerCurrentTrack.vue'
import PlayerControls from '../components/organisms/PlayerControls.vue'
import PlayerExtraControls from '../components/organisms/PlayerExtraControls.vue'

const song = {
  title: 'Ateşten Gömlek',
  artist: 'Sagopa Kajmer',
  image: 'https://placehold.co/56x56/333/fff?text=Cover', // Placeholder
  duration: '4:46',
  current: '2:08',
}

const volume = ref(80)
const progress = ref(45) // Approx percentage for 2:08/4:46
</script>

<template>
  <div class="player-view">
    <!-- Left: Song Info -->
    <PlayerCurrentTrack :song="song" />

    <!-- Center: Controls -->
    <PlayerControls :song="song" :progress="progress" />

    <!-- Right: Extras -->
    <PlayerExtraControls :volume="volume" />
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
</style>
