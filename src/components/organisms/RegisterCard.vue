<template>
  <div class="register-card">
    <div class="header">
      <AppLogo size="48" class="logo" />
      <AppText tag="h1" variant="title" class="title">Dinlemeye başlamak için kaydol</AppText>
    </div>

    <RegisterForm />

    <AppDivider>veya</AppDivider>

    <SocialLoginGroup />

    <div class="footer">
      <AppText variant="subtitle" class="footer-text">Hesabın var mı?</AppText>
      <AppText tag="a" variant="link" href="/sign-in" class="signin-link">Oturum aç</AppText>
    </div>

    <div class="legal">
      <AppText variant="label" class="legal-text">
        This site is protected by reCAPTCHA and the Google
        <a href="#" class="legal-link">Privacy Policy</a> and <a href="#" class="legal-link">Terms of Service</a> apply.
      </AppText>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '../atoms/AppLogo.vue'
import AppText from '../atoms/AppText.vue'
import AppDivider from '../atoms/AppDivider.vue'
import RegisterForm from '../molecules/RegisterForm.vue'
import SocialLoginGroup from '../molecules/SocialLoginGroup.vue'
</script>

<style scoped>
.register-card {
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
  font-size: 2rem; /* Adjust if needed to match design exactly */
  line-height: 1.2;
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

.signin-link {
  font-weight: 700;
  color: white;
  text-decoration: none;
}

.signin-link:hover {
  text-decoration: underline;
  color: #1ed760;
}

.legal {
  margin-top: 40px;
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
