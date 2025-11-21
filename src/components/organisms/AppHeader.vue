<template>
  <header class="app-header">
    <div class="header-left">
      <AppLogo size="32" class="logo" />
    </div>

    <div class="header-center">
      <AppIconButton :active="true" class="home-button">
        <AppIcon name="home-filled" size="24" />
      </AppIconButton>
      <SearchBar />
    </div>

    <div class="header-right">
      <button class="install-app-btn">
        <AppIcon name="download" size="16" />
        <span>Uygulamayı Yükle</span>
      </button>
      
      <AppIconButton>
        <AppIcon name="bell" size="16" />
      </AppIconButton>
      
      <AppIconButton>
        <AppIcon name="users" size="16" />
      </AppIconButton>
      
      <button class="profile-btn">
        <!-- Placeholder for profile image, using a colored circle for now -->
        <div class="profile-placeholder">R</div>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from '../atoms/AppLogo.vue'
import AppIcon from '../atoms/AppIcon.vue'
import AppIconButton from '../atoms/AppIconButton.vue'
import SearchBar from '../molecules/SearchBar.vue'
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 24px;
  background-color: black;
  color: white;
  width: 98%;
}

.header-left {
  flex: 1;
  display: flex;
  align-items: center;
}

.logo {
  color: white;
}

.header-center {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.home-button {
  background-color: #1f1f1f;
  width: 32px;
  height: 32px;
}

.header-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.install-app-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: black;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 16px;
  transition: transform 0.1s ease;
}

.install-app-btn:hover {
  transform: scale(1.04);
}

.profile-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.profile-placeholder {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #535353; /* Fallback color */
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 2px solid #1f1f1f;
}

.profile-btn:hover .profile-placeholder {
  transform: scale(1.04);
  border-color: #2a2a2a;
}
</style>
