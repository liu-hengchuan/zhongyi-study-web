<template>
  <div class="cases-container">
    <div class="container">
      <h1 class="page-title">医案研习与模拟系统</h1>
      <div class="content">
        <a-card title="经典医案" :bordered="false" class="content-card">
          <div class="cases-list">
            <a-card hoverable class="case-card">
              <a-card-meta
                title="胡希恕医案"
                description="经方名家胡希恕先生经典医案选录"
              >
                <template #avatar>
                  <a-icon type="user" :style="{ fontSize: '48px', color: '#faad14' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="case-card">
              <a-card-meta
                title="刘渡舟医案"
                description="经方大家刘渡舟先生临床经验实录"
              >
                <template #avatar>
                  <a-icon type="user" :style="{ fontSize: '48px', color: '#52c41a' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="case-card">
              <a-card-meta
                title="曹颖甫医案"
                description="近代经方名家曹颖甫先生医案精选"
              >
                <template #avatar>
                  <a-icon type="user" :style="{ fontSize: '48px', color: '#1890ff' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="case-card">
              <a-card-meta
                title="近代名医医案"
                description="其他经方名家临床医案汇编"
              >
                <template #avatar>
                  <a-icon type="user" :style="{ fontSize: '48px', color: '#722ed1' }" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-card>

        <a-card title="模拟系统" :bordered="false" class="content-card">
          <a-row gutter={16}>
            <a-col span={12}>
              <a-card hoverable class="simulation-card">
                <a-card-body>
                  <a-icon type="eye-invisible" :style="{ fontSize: '48px', color: '#faad14', marginBottom: '20px' }" />
                  <h3>结构化研读</h3>
                  <p>隐藏诊断，分步思考分析</p>
                  <a-button type="primary" block style="marginTop: 20px;">
                    开始研读
                  </a-button>
                </a-card-body>
              </a-card>
            </a-col>
            <a-col span={12}>
              <a-card hoverable class="simulation-card">
                <a-card-body>
                  <a-icon type="user"><template #children><span style="font-size: 48px;">👨⚕️</span></template></a-icon>
                  <h3>虚拟临床模拟</h3>
                  <p>模拟真实临床流程</p>
                  <a-button type="primary" block style="marginTop: 20px;">
                    开始模拟
                  </a-button>
                </a-card-body>
              </a-card>
            </a-col>
          </a-row>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cases'
}
</script>

<style scoped>
.cases-container {
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

.cases-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.case-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.case-card:hover {
  transform: translateY(-5px);
}

.simulation-card {
  text-align: center;
  transition: transform 0.3s;
}

.simulation-card:hover {
  transform: translateY(-5px);
}

.simulation-card h3 {
  margin: 10px 0;
  color: #333;
  font-size: 20px;
}

.simulation-card p {
  color: #666;
  margin-bottom: 20px;
}
</style>