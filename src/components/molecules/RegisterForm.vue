<template>
  <form class="register-form" @submit.prevent="handleSubmit">
    <AppInput
      id="email"
      label="E-posta adresi"
      placeholder="ad@alan.com"
      v-model="email"
      type="email"
    />
    
    <AppButton variant="primary" class="submit-btn">
      İleri
    </AppButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppInput from '../atoms/AppInput.vue'
import AppButton from '../atoms/AppButton.vue'

const email = ref('')

const handleSubmit = () => {
  console.log('Register with:', email.value)
}
</script>

<style scoped>
.register-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.submit-btn {
  width: 100%;
  margin-top: 12px;
}
</style>
