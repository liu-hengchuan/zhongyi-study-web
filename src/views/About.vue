<template>
  <div class="about-container">
    <div class="about-card">
      <a-icon type="info-circle" :style="{ fontSize: '48px', color: '#1890ff', marginBottom: '20px' }" />
      <h1 class="about-title">关于项目</h1>
      <div class="about-content">
        <a-descriptions title="项目信息" :column="1" bordered>
          <a-descriptions-item label="框架">Vue 2</a-descriptions-item>
          <a-descriptions-item label="UI组件库">Ant Design Vue</a-descriptions-item>
          <a-descriptions-item label="路由管理">Vue Router 3</a-descriptions-item>
          <a-descriptions-item label="状态管理">Vuex 3</a-descriptions-item>
        </a-descriptions>
        <div class="about-text">
          <h3>项目特点</h3>
          <ul>
            <li>现代化的技术栈</li>
            <li>清晰的项目结构</li>
            <li>美观的欢迎界面</li>
            <li>便于后续功能拓展</li>
          </ul>
        </div>
      </div>
      <a-button type="primary" @click="$router.go(-1)">
        <a-icon type="arrow-left" /> 返回首页
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.about-card {
  background: white;
  border-radius: 16px;
  padding: 60px 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  width: 100%;
}

.about-title {
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
}

.about-content {
  margin-bottom: 40px;
}

.about-text {
  margin-top: 30px;
}

.about-text h3 {
  font-size: 20px;
  color: #2c3e50;
  margin-bottom: 16px;
}

.about-text ul {
  list-style: disc;
  padding-left: 20px;
  color: #7f8c8d;
  line-height: 2;
}

@media (max-width: 768px) {
  .about-card {
    padding: 40px 20px;
  }
  
  .about-title {
    font-size: 24px;
  }
}
</style>
