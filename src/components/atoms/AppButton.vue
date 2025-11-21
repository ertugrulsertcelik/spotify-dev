<template>
  <button :class="['btn', variant]">
    <span v-if="$slots.icon" class="icon">
      <slot name="icon"></slot>
    </span>
    <span class="label">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'outline'
}>(), {
  variant: 'primary'
})
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 500px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s, background-color 0.2s, border-color 0.2s;
  border: 1px solid transparent;
  position: relative;
}

.btn:active {
  transform: scale(0.98);
}

.primary {
  background-color: #1ed760;
  color: #000000;
}

.primary:hover {
  background-color: #1fdf64;
  transform: scale(1.02);
}

.primary:active {
  background-color: #16be55;
  transform: scale(0.98);
}

.outline {
  background-color: transparent;
  border: 1px solid #727272;
  color: white;
}

.outline:hover {
  border-color: white;
}

.icon {
  position: absolute;
  left: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  flex-grow: 1;
  text-align: center;
}
</style>
