<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="top-section">
        <div class="columns-container">
          <FooterColumn
            title="Şirket"
            :links="[
              { text: 'Hakkında', url: '#' },
              { text: 'Kariyer', url: '#' },
              { text: 'For the Record', url: '#' }
            ]"
          />
          <FooterColumn
            title="Topluluklar"
            :links="[
              { text: 'Sanatçılar İçin', url: '#' },
              { text: 'Geliştiriciler', url: '#' },
              { text: 'Reklam', url: '#' },
              { text: 'Yatırımcılar', url: '#' },
              { text: 'Satıcılar', url: '#' }
            ]"
          />
          <FooterColumn
            title="Yararlı bağlantılar"
            :links="[
              { text: 'Destek', url: '#' },
              { text: 'Ücretsiz Mobil Uygulama', url: '#' },
              { text: 'Ülkeye göre popüler', url: '#' },
              { text: 'Import your music', url: '#' }
            ]"
          />
          <FooterColumn
            title="Spotify Planları"
            :links="[
              { text: 'Premium Bireysel', url: '#' },
              { text: 'Premium Duo', url: '#' },
              { text: 'Premium Aile', url: '#' },
              { text: 'Premium Öğrenci', url: '#' },
              { text: 'Spotify Free', url: '#' }
            ]"
          />
        </div>
        <div class="social-container">
          <SocialIconGroup />
        </div>
      </div>
      
      <div class="divider"></div>
      
      <div class="bottom-section">
        <ul class="legal-links">
          <li><a href="#">Yasal</a></li>
          <li><a href="#">Güvenlik ve Gizlilik Merkezi</a></li>
          <li><a href="#">Gizlilik Politikası</a></li>
          <li><a href="#">Tanımlama Bilgisi Ayarları</a></li>
          <li><a href="#">Reklamlar Hakkında</a></li>
          <li><a href="#">Erişilebilirlik</a></li>
        </ul>
        <div class="copyright">
          © 2025 Spotify AB
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterColumn from '../molecules/FooterColumn.vue'
import SocialIconGroup from '../molecules/SocialIconGroup.vue'
</script>

<style scoped>
.app-footer {
  background-color: #121212;
  padding: 40px 32px;
  color: white;
}

.footer-content {
  max-width: 1000px; /* Reduced from 1200px */
  margin: 0 auto;
}

.top-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 48px;
  margin-bottom: 40px;
}

.columns-container {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  flex: 1;
}

.social-container {
  display: flex;
  align-items: flex-start;
}

.divider {
  height: 1px;
  background-color: #292929;
  margin-bottom: 40px;
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.875rem;
}

.legal-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.legal-links a {
  color: #a7a7a7;
  text-decoration: none;
}

.legal-links a:hover {
  color: white;
}

.copyright {
  color: #a7a7a7;
}

@media (max-width: 900px) {
  .top-section {
    flex-direction: column;
  }
  
  .social-container {
    margin-top: 24px;
  }
}

@media (max-width: 600px) {
  .columns-container {
    flex-direction: column;
    gap: 32px;
  }

  .bottom-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  
  .legal-links {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
