<template>
  <div class="profile-container">
    <div class="container">
      <h1 class="page-title">个人学习中心</h1>
      <div class="content">
        <a-row gutter={16}>
          <a-col span={8}>
            <a-card title="学习仪表盘" :bordered="false" class="dashboard-card">
              <a-statistic title="本周学习时长" value="12" suffix="小时">
                <template #prefix>
                  <a-icon type="clock-circle" :style="{ color: '#3f8600' }" />
                </template>
              </a-statistic>
              <div style="margin: 20px 0;">
                <a-statistic title="模块进度" value="75" suffix="%">
                  <template #prefix>
                    <a-icon type="file-text" :style="{ color: '#13c2c2' }" />
                  </template>
                </a-statistic>
              </div>
              <a-statistic title="知识掌握度" value="82" suffix="分">
                <template #prefix>
                  <a-icon type="star" :style="{ color: '#faad14' }" />
                </template>
              </a-statistic>
            </a-card>

            <a-card title="学习进度" :bordered="false" class="progress-card">
              <div class="progress-item">
                <span>经典典籍</span>
                <a-progress percent={65} strokeColor="#52c41a" />
              </div>
              <div class="progress-item">
                <span>中药精研</span>
                <a-progress percent={80} strokeColor="#1890ff" />
              </div>
              <div class="progress-item">
                <span>方剂解析</span>
                <a-progress percent={70} strokeColor="#fa8c16" />
              </div>
              <div class="progress-item">
                <span>脉诊舌诊</span>
                <a-progress percent={60} strokeColor="#722ed1" />
              </div>
            </a-card>
          </a-col>

          <a-col span={16}>
            <a-card title="学习动态" :bordered="false" class="activity-card">
              <a-timeline>
                <a-timeline-item>2023-10-28 14:30 学习了《伤寒论》第96条</a-timeline-item>
                <a-timeline-item>2023-10-28 13:15 完成了小柴胡汤药证测试</a-timeline-item>
                <a-timeline-item>2023-10-28 10:45 研习了胡希恕医案一则</a-timeline-item>
                <a-timeline-item>2023-10-27 16:20 完成了脉诊训练5道题</a-timeline-item>
                <a-timeline-item>2023-10-27 15:10 学习了桂枝汤的方义解析</a-timeline-item>
              </a-timeline>
            </a-card>

            <a-card title="智能复习" :bordered="false" class="review-card">
              <a-alert
                message="今日复习任务"
                description="需复习20张条文卡片，10个药证知识点"
                type="info"
                showIcon
                style="marginBottom: 20px;"
              />
              <div class="review-buttons">
                <a-button type="primary" size="large">
                  <a-icon type="book" />
                  开始复习
                </a-button>
                <a-button size="large">
                  <a-icon type="clock-circle" />
                  稍后复习
                </a-button>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.profile-container {
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
  gap: 20px;
}

.dashboard-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.progress-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
}

.progress-item {
  margin-bottom: 20px;
}

.progress-item span {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

.activity-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.review-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;
}

.review-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>