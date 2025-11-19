<template>
  <div class="home-container">
    <div class="welcome-section">
      <div class="welcome-card">
        <div class="icon-wrapper">
          <a-icon type="smile" :style="{ fontSize: '64px', color: '#1890ff' }" />
        </div>
        <h1 class="welcome-title">欢迎使用 Vue 2 + Ant Design Vue 项目</h1>
        <p class="welcome-subtitle">这是一个便于后续拓展的项目基础框架</p>
        <div class="feature-grid">
          <div class="feature-card">
            <a-icon type="setting" :style="{ fontSize: '32px', color: '#52c41a' }" />
            <h3>易于配置</h3>
            <p>完善的项目结构，方便快速配置</p>
          </div>
          <div class="feature-card">
            <a-icon type="layout" :style="{ fontSize: '32px', color: '#fa8c16' }" />
            <h3>美观界面</h3>
            <p>基于 Ant Design Vue 的现代化 UI</p>
          </div>
          <div class="feature-card">
            <a-icon type="code" :style="{ fontSize: '32px', color: '#722ed1' }" />
            <h3>便于拓展</h3>
            <p>模块化设计，支持功能扩展</p>
          </div>
        </div>
        <div class="action-buttons">
          <a-button type="primary" size="large" @click="handleClick">
            <a-icon type="rocket" /> 开始使用
          </a-button>
          <a-button size="large" @click="handleAbout">
            <a-icon type="info-circle" /> 了解更多
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handleClick() {
      this.$message.success('项目已准备就绪！')
    },
    handleAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.welcome-section {
  width: 100%;
  max-width: 1200px;
}

.welcome-card {
  background: white;
  border-radius: 16px;
  padding: 60px 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.6s ease-out;
}

.icon-wrapper {
  margin-bottom: 30px;
  animation: bounce 1.5s infinite;
}

.welcome-title {
  font-size: 36px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 16px;
  line-height: 1.3;
}

.welcome-subtitle {
  font-size: 18px;
  color: #7f8c8d;
  margin-bottom: 40px;
  font-weight: 300;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.feature-card {
  padding: 30px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  font-size: 20px;
  color: #2c3e50;
  margin: 20px 0 12px 0;
}

.feature-card p {
  font-size: 14px;
  color: #7f8c8d;
  line-height: 1.6;
}

.action-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .welcome-card {
    padding: 40px 20px;
  }
  
  .welcome-title {
    font-size: 28px;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>
