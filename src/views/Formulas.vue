<template>
  <div class="formulas-container">
    <div class="container">
      <h1 class="page-title">方剂解析库</h1>
      <div class="content">
        <a-card title="核心方剂" :bordered="false" class="content-card">
          <div class="formula-list">
            <a-card
              v-for="prescription in prescriptions"
              :key="prescription.id"
              hoverable
              class="formula-card"
            >
              <a-card-meta
                :title="prescription.name"
                :description="`组成：${prescription.composition || '未记载'}。功用：${prescription.function || '未记载'}。`"
              >
                <template #avatar>
                  <a-icon type="book" :style="{ fontSize: '48px', color: '#faad14' }" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-card>

        <a-card title="特色功能" :bordered="false" class="content-card">
          <a-row :gutter="16">
            <a-col span={12}>
              <div class="feature-item">
                <a-icon type="bar-chart" :style="{ fontSize: '32px', color: '#1890ff', marginBottom: '10px' }" />
                <h3>君臣佐使可视化</h3>
                <p>清晰展示方剂结构，理解组方逻辑</p>
              </div>
            </a-col>
            <a-col span={12}>
              <div class="feature-item">
                <a-icon type="database" :style="{ fontSize: '32px', color: '#52c41a', marginBottom: '10px' }" />
                <h3>类方推导</h3>
                <p>系统展示方剂的类方家族及演变</p>
              </div>
            </a-col>
            <a-col span={12}>
              <div class="feature-item">
                <a-icon type="file-search" :style="{ fontSize: '32px', color: '#fa8c16', marginBottom: '10px' }" />
                <h3>方证要点提炼</h3>
                <p>精炼总结方剂的应用指征</p>
              </div>
            </a-col>
            <a-col span={12}>
              <div class="feature-item">
                <a-icon type="edit" :style="{ fontSize: '32px', color: '#722ed1', marginBottom: '10px' }" />
                <h3>模拟处方</h3>
                <p>拖拽药物组成方剂，系统评估合理性</p>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPrescriptions } from '../api/formula'

export default {
  name: 'Formulas',
  data() {
    return {
      prescriptions: []
    }
  },
  mounted() {
    this.loadPrescriptions()
  },
  methods: {
    async loadPrescriptions() {
      try {
        const response = await getAllPrescriptions()
        console.log('方剂数据:', response)
        this.prescriptions = response
      } catch (error) {
        console.error('加载方剂失败:', error)
      }
    }
  }
}
</script>

<style scoped>
.formulas-container {
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

.formula-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.formula-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.formula-card:hover {
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