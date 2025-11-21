<template>
  <div class="slider-view">
    <div class="content-wrapper">
      <CardSlider :items="sliderItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardSlider from '../components/organisms/CardSlider.vue'

const sliderItems = [
  {
    imageSrc: 'javascript:void(0)', // Placeholder as requested
    title: 'Barış Demirel x Can Kazaz ve haftanın en...',
    description: 'Barış Demirel x Can Kazaz ve haftanın en iyileri.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Yeni Müzik Radarı',
    description: 'Takip ettiğin sanatçıların en son...'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Keşif',
    description: 'Yeni favori sanatçını keşfet ⚡ Kapak:...'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Rap Radyo',
    description: "Türkçe rap'in sevilen isimleri. Kapak: Çağr..."
  },
  {
    imageSrc: 'javascript:void(0)',
    title: '0 Km',
    description: 'En iyi yerli hip hop çıkışları. Kapak:...'
  },
  // Duplicates for scrolling test
  {
    imageSrc: 'javascript:void(0)',
    title: 'Barış Demirel x Can Kazaz',
    description: 'Barış Demirel x Can Kazaz ve haftanın en iyileri.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Yeni Müzik Radarı',
    description: 'Takip ettiğin sanatçıların en son...'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Keşif',
    description: 'Yeni favori sanatçını keşfet ⚡ Kapak:...'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Rap Radyo',
    description: "Türkçe rap'in sevilen isimleri. Kapak: Çağr..."
  },
  {
    imageSrc: 'javascript:void(0)',
    title: '0 Km',
    description: 'En iyi yerli hip hop çıkışları. Kapak:...'
  },
  // More duplicates for extended scrolling
  {
    imageSrc: 'javascript:void(0)',
    title: 'Pop Rising',
    description: 'En yeni ve en hit pop şarkılar.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Hot Hits Türkiye',
    description: 'Türkiye\'nin en çok dinlenen şarkıları.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Akustik Türkçe',
    description: 'En sevilen Türkçe şarkıların akustik versiyonları.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Türkçe Rock',
    description: 'Türkçe rock müziğin efsaneleri ve yenileri.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Yabancı Pop',
    description: 'Dünyadan en yeni pop hitleri.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Chill Hits',
    description: 'Rahatlamak için en iyi şarkılar.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Mood Booster',
    description: 'Modunu yükseltecek şarkılar.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Deep Focus',
    description: 'Odaklanmana yardımcı olacak müzikler.'
  },
  {
    imageSrc: 'javascript:void(0)',
    title: 'Instrumental Study',
    description: 'Ders çalışırken dinleyebileceğin enstrümantal müzikler.'
  }
]
</script>

<style scoped>
.slider-view {
  min-height: 100vh;
  background-color: #121212;
  padding: 32px;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px; /* Or whatever max width fits the design */
}
</style>
