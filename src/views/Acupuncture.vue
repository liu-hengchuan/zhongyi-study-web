<template>
  <div class="acupuncture-container">
    <div class="container">
      <h1 class="page-title">针灸腧穴库</h1>
      <div class="content">
        <a-card title="经络腧穴" :bordered="false" class="content-card">
          <div class="meridian-list">
            <a-card hoverable class="meridian-card">
              <a-card-meta
                title="手太阴肺经"
                description="起于中焦，下络大肠，还循胃口，上膈属肺"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#faad14' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="meridian-card">
              <a-card-meta
                title="手阳明大肠经"
                description="起于食指桡侧端，经过手背，行于上肢外侧前缘"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#52c41a' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="meridian-card">
              <a-card-meta
                title="足阳明胃经"
                description="起于鼻翼旁，经过面部，沿胸腹及下肢外侧前缘下行"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#1890ff' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="meridian-card">
              <a-card-meta
                title="足太阴脾经"
                description="起于足大趾内侧端，沿下肢内侧前缘上行，入腹属脾络胃"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#722ed1' }" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-card>

        <a-card title="特色功能" :bordered="false" class="content-card">
          <a-row gutter={16}>
            <a-col span={12}>
              <div class="feature-item">
                <a-icon type="eye" :style="{ fontSize: '32px', color: '#1890ff', marginBottom: '10px' }" />
                <h3>三维模型</h3>
                <p>可交互的人体经络穴位模型</p>
              </div>
            </a-col>
            <a-col span={12}>
              <div class="feature-item">
                <a-icon type="compass" :style="{ fontSize: '32px', color: '#52c41a', marginBottom: '10px' }" />
                <h3>精准定位</h3>
                <p>详细的穴位定位和取法指导</p>
              </div>
            </a-col>
            <a-col span={12}>
              <div class="feature-item">
                <a-icon type="thunderbolt" :style="{ fontSize: '32px', color: '#fa8c16', marginBottom: '10px' }" />
                <h3>配穴方案</h3>
                <p>常见病的经典配穴及思路</p>
              </div>
            </a-col>
            <a-col span={12}>
              <div class="feature-item">
                <a-icon type="link" :style="{ fontSize: '32px', color: '#722ed1', marginBottom: '10px' }" />
                <h3>方剂关联</h3>
                <p>穴位与方剂的协同作用标注</p>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Acupuncture'
}
</script>

<style scoped>
.acupuncture-container {
  min-height: calc(100vh - 144px);
  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
  padding: 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 36px;
  font-weight: bold;
  color: #8B4513;
  margin-bottom: 40px;
  text-align: center;
  font-family: 'Microsoft YaHei', sans-serif;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.content-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.meridian-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.meridian-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.meridian-card:hover {
  transform: translateY(-5px);
}

.feature-item {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  transition: transform 0.3s;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-item h3 {
  margin: 10px 0;
  color: #333;
  font-size: 18px;
}

.feature-item p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}
</style>