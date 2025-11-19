<template>
  <div class="header-container">
    <div class="header-content">
      <div class="logo">
        <a-icon type="book" :style="{ fontSize: '32px', color: '#fff', marginRight: '10px' }" />
        <span class="logo-text">经方薪传</span>
      </div>
      <a-menu mode="horizontal" theme="dark" class="nav-menu">
        <a-menu-item key="home">
          <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="classics">
          <router-link to="/classics">经典典籍库</router-link>
        </a-menu-item>
        <a-menu-item key="herbs">
          <router-link to="/herbs">中药精研库</router-link>
        </a-menu-item>
        <a-menu-item key="formulas">
          <router-link to="/formulas">方剂解析库</router-link>
        </a-menu-item>
        <a-menu-item key="diagnosis">
          <router-link to="/diagnosis">脉诊与舌诊</router-link>
        </a-menu-item>
        <a-menu-item key="acupuncture">
          <router-link to="/acupuncture">针灸腧穴库</router-link>
        </a-menu-item>
        <a-menu-item key="cases">
          <router-link to="/cases">医案模拟系统</router-link>
        </a-menu-item>
        <a-menu-item key="profile">
          <router-link to="/profile">个人学习中心</router-link>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header-container {
  background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  font-family: 'Microsoft YaHei', sans-serif;
}

.logo-text {
  letter-spacing: 2px;
}

.nav-menu {
  flex: 1;
  justify-content: center;
  background: transparent;
  border-bottom: none;
}

.nav-menu a {
  color: #fff !important;
  font-size: 16px;
  font-family: 'Microsoft YaHei', sans-serif;
}

.nav-menu a:hover {
  color: #FFD700 !important;
}
</style>