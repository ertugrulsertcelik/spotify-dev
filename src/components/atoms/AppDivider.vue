<template>
  <div class="divider">
    <span class="line"></span>
    <span class="text">veya</span>
    <span class="line"></span>
  </div>
</template>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 32px 0;
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: #292929;
}

.text {
  padding: 0 16px;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: lowercase;
}
</style>
