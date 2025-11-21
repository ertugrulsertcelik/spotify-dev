<template>
  <component :is="tag" :class="['app-text', variant, { bold }]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tag?: string
  variant?: 'title' | 'subtitle' | 'body' | 'label' | 'link'
  bold?: boolean
}>(), {
  tag: 'p',
  variant: 'body',
  bold: false
})
</script>

<style scoped>
.app-text {
  color: white;
  margin: 0;
  font-family: 'Circular', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
}

.title {
  font-size: 3rem; /* 48px */
  line-height: 1.1;
  letter-spacing: -0.04em;
  font-weight: 700;
}

.subtitle {
  font-size: 1.125rem; /* 18px */
  font-weight: 400;
}

.body {
  font-size: 1rem;
}

.label {
  font-size: 0.875rem; /* 14px */
  font-weight: 700;
}

.link {
  font-size: 0.875rem;
  text-decoration: underline;
  cursor: pointer;
  color: #fff;
}

.link:hover {
  color: #1ed760;
}

.bold {
  font-weight: 700;
}
</style>
