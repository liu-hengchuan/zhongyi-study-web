<template>
  <div class="home-container">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">经方薪传</h1>
          <p class="hero-subtitle">传承经典，开启中医学习之旅</p>
          <p class="hero-description">
            基于《伤寒论》、《金匮要略》等经典著作，构建完整的经方学习体系
            <br />
            从理论到临床，助您成为真正的经方大家
          </p>
          <div class="hero-buttons">
            <a-button type="primary" size="large" @click="$router.push('/classics')">
              <a-icon type="book" />
              开始学习
            </a-button>
            <a-button size="large" @click="$router.push('/cases')">
              <a-icon type="user" />
              查看医案
            </a-button>
          </div>
        </div>
        <div class="hero-image">
          <a-icon type="medicine-box" :style="{ fontSize: '200px', color: 'rgba(255, 255, 255, 0.9)' }" />
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="container">
        <h2 class="section-title">核心功能</h2>
        <div class="features-grid">
          <a-card hoverable class="feature-card">
              <a-icon type="book" :style="{ fontSize: '48px', color: '#8B4513', marginBottom: '20px' }" />
              <h3 class="feature-title">经典典籍</h3>
              <p class="feature-description">收录《伤寒论》、《金匮要略》等核心典籍，支持原文与白话文对照阅读</p>
              <a-button type="link" @click="$router.push('/classics')">
                了解更多
                <a-icon type="right" />
              </a-button>
          </a-card>

          <a-card hoverable class="feature-card">
              <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#D2691E', marginBottom: '20px' }" />
              <h3 class="feature-title">中药精研</h3>
              <p class="feature-description">学习中药的药性、药证、配伍规律，掌握经方用药特点</p>
              <a-button type="link" @click="$router.push('/herbs')">
                了解更多
                <a-icon type="right" />
              </a-button>
          </a-card>

          <a-card hoverable class="feature-card">
              <a-icon type="file-search" :style="{ fontSize: '48px', color: '#8B4513', marginBottom: '20px' }" />
              <h3 class="feature-title">方剂解析</h3>
              <p class="feature-description">深入解析经方的组成、方义、类方演变，掌握方证对应思维</p>
              <a-button type="link" @click="$router.push('/formulas')">
                了解更多
                <a-icon type="right" />
              </a-button>
          </a-card>

          <a-card hoverable class="feature-card">
              <a-icon type="eye" :style="{ fontSize: '48px', color: '#D2691E', marginBottom: '20px' }" />
              <h3 class="feature-title">诊断训练</h3>
              <p class="feature-description">通过脉诊、舌诊训练，掌握中医诊断方法</p>
              <a-button type="link" @click="$router.push('/diagnosis')">
                了解更多
                <a-icon type="right" />
              </a-button>
          </a-card>

          <a-card hoverable class="feature-card">
              <a-icon type="thunderbolt" :style="{ fontSize: '48px', color: '#8B4513', marginBottom: '20px' }" />
              <h3 class="feature-title">针灸腧穴</h3>
              <p class="feature-description">学习经络腧穴定位、主治及经典配穴方案</p>
              <a-button type="link" @click="$router.push('/acupuncture')">
                了解更多
                <a-icon type="right" />
              </a-button>
          </a-card>

          <a-card hoverable class="feature-card">
              <a-icon type="user"><template #children><span style="font-size: 48px;">👨⚕️</span></template></a-icon>
              <h3 class="feature-title">医案研习</h3>
              <p class="feature-description">通过经典医案和虚拟临床模拟，提升临床思辨能力</p>
              <a-button type="link" @click="$router.push('/cases')">
                了解更多
                <a-icon type="right" />
              </a-button>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-container {
  min-height: calc(100vh - 144px);
}

.hero-section {
  background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
  color: #fff;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
  background-repeat: repeat;
  background-size: 50px 50px;
  opacity: 0.3;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
}

.hero-text {
  flex: 1;
  min-width: 300px;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Microsoft YaHei', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 24px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.hero-description {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-buttons a-button {
  font-size: 18px;
  padding: 12px 32px;
}

.hero-image {
  flex: 1;
  min-width: 300px;
  text-align: center;
  opacity: 0.9;
}

.features-section {
  padding: 60px 20px;
  background: #f5f7fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
  font-family: 'Microsoft YaHei', sans-serif;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 30px;
}

.feature-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.feature-title {
  margin: 10px 0;
  color: #333;
  font-size: 20px;
  font-family: 'Microsoft YaHei', sans-serif;
}

.feature-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 20px;
  }

  .hero-description {
    font-size: 16px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>