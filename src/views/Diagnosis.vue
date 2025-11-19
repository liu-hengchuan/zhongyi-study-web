<template>
  <div class="diagnosis-container">
    <div class="container">
      <h1 class="page-title">脉诊与舌诊训练库</h1>
      <div class="content">
        <a-card title="诊断训练" :bordered="false" class="content-card">
          <a-row gutter={16}>
            <a-col span={12}>
              <a-card hoverable class="training-card pulse-card">
                  <a-icon type="sound" :style="{ fontSize: '48px', color: '#faad14', marginBottom: '20px' }" />
                  <h3>脉诊训练</h3>
                  <p>通过音频和描述学习脉象特征</p>
                  <a-button type="primary" block style="marginTop: 20px;">
                    开始训练
                  </a-button>
              </a-card>
            </a-col>
            <a-col span={12}>
              <a-card hoverable class="training-card tongue-card">
                  <a-icon type="camera" :style="{ fontSize: '48px', color: '#52c41a', marginBottom: '20px' }" />
                  <h3>舌诊训练</h3>
                  <p>通过图片识别舌质舌苔</p>
                  <a-button type="primary" block style="marginTop: 20px;">
                    开始训练
                  </a-button>
              </a-card>
            </a-col>
          </a-row>
        </a-card>

        <a-card title="常见诊断" :bordered="false" class="content-card">
          <div class="diagnosis-list">
            <a-tag v-for="pulse in pulses" :key="pulse.id" color="blue">{{ pulse.name }}</a-tag>
            <a-tag v-for="tongue in tongues" :key="tongue.id" color="green">{{ tongue.tongueColor + tongue.tongueCoating }}</a-tag>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllPulseDiagnosis } from '../api/pulse'
import { getAllTongueDiagnosis } from '../api/tongue'

export default {
  name: 'Diagnosis',
  data() {
    return {
      pulses: [],
      tongues: []
    }
  },
  mounted() {
    this.loadPulses()
    this.loadTongues()
  },
  methods: {
    async loadPulses() {
      try {
        const response = await getAllPulseDiagnosis()
        this.pulses = response.data
      } catch (error) {
        console.error('加载脉象失败:', error)
      }
    },
    async loadTongues() {
      try {
        const response = await getAllTongueDiagnosis()
        this.tongues = response.data
      } catch (error) {
        console.error('加载舌诊记录失败:', error)
      }
    }
  }
}
</script>

<style scoped>
.diagnosis-container {
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

.training-card {
  text-align: center;
  transition: transform 0.3s;
}

.training-card:hover {
  transform: translateY(-5px);
}

.training-card h3 {
  margin: 10px 0;
  color: #333;
  font-size: 20px;
}

.training-card p {
  color: #666;
  margin-bottom: 20px;
}

.diagnosis-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>