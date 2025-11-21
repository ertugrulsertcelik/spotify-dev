<template>
  <div class="library-sidebar">
    <LibraryHeader />
    <LibraryFilter @change="handleFilterChange" />
    
    <div class="search-sort-bar">
      <button class="icon-btn">
        <AppIcon name="search" size="16" />
      </button>
      <div class="spacer"></div>
      <button class="sort-btn">
        <span>Son çalınanlar</span>
        <AppIcon name="list" size="16" />
      </button>
    </div>

    <div class="library-list">
      <LibraryItem
        v-for="(item, index) in filteredItems"
        :key="index"
        :image-src="item.imageSrc"
        :title="item.title"
        :subtitle="item.subtitle"
        :pinned="item.pinned"
        :is-liked="item.isLiked"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LibraryHeader from '../molecules/LibraryHeader.vue'
import LibraryFilter from '../molecules/LibraryFilter.vue'
import LibraryItem from '../molecules/LibraryItem.vue'
import AppIcon from '../atoms/AppIcon.vue'

const activeFilter = ref('')

const handleFilterChange = (filter: string) => {
  activeFilter.value = filter
}

const items = [
  {
    imageSrc: 'javascript:void(0)', // Will be covered by isLiked overlay
    title: 'Beğenilen Şarkılar',
    subtitle: 'Çalma listesi • 47 şarkı',
    pinned: true,
    isLiked: true,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'My. New Way',
    subtitle: 'Çalma listesi • Recep',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: "2022'de En Çok Dinlediğin Şarkılar",
    subtitle: 'Çalma listesi • Spotify',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Fularsız Entellik',
    subtitle: 'Podcast • Podbee Media',
    pinned: false,
    category: "Podcast'ler ve Programlar"
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Yol',
    subtitle: 'Çalma listesi • Recep',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: "Deniz Göktaş'a Ayıracak Vaktim Yok",
    subtitle: 'Podcast • Podbee Media',
    pinned: false,
    category: "Podcast'ler ve Programlar"
  },
  {
    imageSrc: 'javascript:void(0)',
    title: "2021'de En Çok Dinlediğin Şarkılar",
    subtitle: 'Çalma listesi • Spotify',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Flapstars',
    subtitle: 'Podcast • Flaps Club',
    pinned: false,
    category: "Podcast'ler ve Programlar"
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'English Fairy Tales',
    subtitle: 'Podcast • Doa & Harapan',
    pinned: false,
    category: "Podcast'ler ve Programlar"
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Liked Songs',
    subtitle: 'Playlist • 120 songs',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Daily Mix 1',
    subtitle: 'Playlist • Spotify',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Discover Weekly',
    subtitle: 'Playlist • Spotify',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Release Radar',
    subtitle: 'Playlist • Spotify',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'On Repeat',
    subtitle: 'Playlist • Spotify',
    pinned: false,
    category: 'Playlists'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Time Crisis',
    subtitle: 'Podcast • Vampire Weekend',
    pinned: false,
    category: "Podcast'ler ve Programlar"
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Song Exploder',
    subtitle: 'Podcast • Radiotopia',
    pinned: false,
    category: "Podcast'ler ve Programlar"
  }
]

const filteredItems = computed(() => {
  if (!activeFilter.value) {
    return items
  }
  return items.filter(item => item.category === activeFilter.value)
})
</script>

<style scoped>
.library-sidebar {
  width: 100%;
  max-width: 420px; /* Approximate width of sidebar */
  background-color: #121212;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.search-sort-bar {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: #b3b3b3;
}

.icon-btn {
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  background-color: #2a2a2a;
  color: white;
}

.spacer {
  flex: 1;
}

.sort-btn {
  background: transparent;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
}

.sort-btn:hover {
  color: white;
  transform: scale(1.02);
}

.library-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 8px 8px;
}

/* Scrollbar styling */
.library-list::-webkit-scrollbar {
  width: 12px;
}

.library-list::-webkit-scrollbar-track {
  background: transparent;
}

.library-list::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.library-list:hover::-webkit-scrollbar-thumb {
  background-color: #5a5a5a;
}
</style>
