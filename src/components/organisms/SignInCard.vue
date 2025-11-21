<template>
  <div class="sign-in-card">
    <div class="header">
      <AppLogo size="48" class="logo" />
      <AppText tag="h1" variant="title" class="title">Tekrar hoş geldin</AppText>
    </div>

    <LoginForm />

    <AppDivider />

    <SocialLoginGroup />

    <div class="footer">
      <AppText variant="subtitle" class="footer-text">Hesabın yok mu?</AppText>
      <AppText tag="a" variant="link" class="signup-link">Kaydol</AppText>
    </div>

    <div class="legal">
      <AppText variant="label" class="legal-text">
        Bu site reCAPTCHA tarafından korunmaktadır ve Google
        <a href="#" class="legal-link">Gizlilik Politikası</a> ile <a href="#" class="legal-link">Hizmet Koşulları</a> geçerlidir.
      </AppText>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '../atoms/AppLogo.vue'
import AppText from '../atoms/AppText.vue'
import AppDivider from '../atoms/AppDivider.vue'
import LoginForm from '../molecules/LoginForm.vue'
import SocialLoginGroup from '../molecules/SocialLoginGroup.vue'
</script>

<style scoped>
.sign-in-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  padding: 32px;
  margin: 0 auto;
  background-color: #121212;
  border: none;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  text-align: center;
}

.logo {
  color: white;
}

.title {
  margin-top: 12px;
}

.footer {
  margin-top: 40px;
  display: flex;
  gap: 8px;
  align-items: center;
}

.footer-text {
  color: #a7a7a7;
}

.signup-link {
  font-weight: 700;
  color: white;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
  color: #1ed760;
}

.legal {
  margin-top: 80px;
  text-align: center;
  max-width: 400px;
}

.legal-text {
  color: #a7a7a7;
  font-size: 0.75rem;
  font-weight: 400;
}

.legal-link {
  color: #a7a7a7;
  text-decoration: underline;
}

.legal-link:hover {
  color: #1ed760;
}
</style>
