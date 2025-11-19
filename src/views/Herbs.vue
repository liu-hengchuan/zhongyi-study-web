<template>
  <div class="herbs-container">
    <div class="container">
      <h1 class="page-title">中药精研库</h1>
      <div class="content">
        <a-card title="常用中药" :bordered="false" class="content-card">
          <div class="herb-list">
            <a-card hoverable class="herb-card">
              <a-card-meta
                title="桂枝"
                description="性温，味辛甘；归心、肺、膀胱经。发汗解肌，温通经脉，助阳化气。"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#faad14' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="herb-card">
              <a-card-meta
                title="芍药"
                description="性微寒，味苦酸；归肝、脾经。养血调经，敛阴止汗，柔肝止痛，平抑肝阳。"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#52c41a' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="herb-card">
              <a-card-meta
                title="甘草"
                description="性平，味甘；归心、肺、脾、胃经。补脾益气，清热解毒，祛痰止咳，缓急止痛，调和诸药。"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#1890ff' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="herb-card">
              <a-card-meta
                title="柴胡"
                description="性微寒，味苦辛；归肝、胆经。疏散退热，疏肝解郁，升举阳气。"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#722ed1' }" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-card>

        <a-card title="特色功能" :bordered="false" class="content-card">
          <div class="feature-list">
            <a-statistic title="经方配伍" value="1200+">
              <template #suffix>
                <a-icon type="team" />
              </template>
            </a-statistic>
            <a-statistic title="药证学习" value="500+">
              <template #suffix>
                <a-icon type="book" />
              </template>
            </a-statistic>
            <a-statistic title="对比学习" value="200+">
              <template #suffix>
                <a-icon type="compare" />
              </template>
            </a-statistic>
            <a-statistic title="药图辨识" value="800+">
              <template #suffix>
                <a-icon type="picture" />
              </template>
            </a-statistic>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Herbs'
}
</script>

<style scoped>
.herbs-container {
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

.herb-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.herb-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.herb-card:hover {
  transform: translateY(-5px);
}

.feature-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>