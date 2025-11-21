<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <AppInput
      label="E-posta adresi veya kullanıcı adı"
      v-model="email"
      placeholder="E-posta adresi veya kullanıcı adı"
    />
    <AppButton type="submit" variant="primary">Devam</AppButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppInput from '../atoms/AppInput.vue'
import AppButton from '../atoms/AppButton.vue'

const email = ref('')

const handleSubmit = () => {
  console.log('Form submitted', email.value)
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
}
</style>
