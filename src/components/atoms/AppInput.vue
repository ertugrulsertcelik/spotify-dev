<template>
  <div class="input-wrapper">
    <label v-if="label" class="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="input"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  modelValue: string
  type?: string
  placeholder?: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.label {
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
}

.input {
  background-color: #121212;
  border: 1px solid #727272;
  border-radius: 4px;
  padding: 14px;
  color: white;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input:hover {
  border-color: white;
}

.input:focus {
  border-color: white;
  box-shadow: 0 0 0 1px white;
}
</style>
