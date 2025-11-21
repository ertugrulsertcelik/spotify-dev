<template>
  <div class="footer-column">
    <h3 class="column-title">{{ title }}</h3>
    <ul class="link-list">
      <li v-for="(link, index) in links" :key="index" class="link-item">
        <a :href="link.url" class="footer-link">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Link {
  text: string
  url: string
}

defineProps({
  title: {
    type: String,
    required: true
  },
  links: {
    type: Array as () => Link[],
    required: true
  }
})
</script>

<style scoped>
.footer-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.column-title {
  color: white;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  color: #a7a7a7;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

.footer-link:hover {
  color: white;
  text-decoration: underline;
}
</style>
