<template>
  <div class="classics-container">
    <div class="container">
      <h1 class="page-title">经典典籍库</h1>
      <div class="content">
        <a-card title="经典原文库" :bordered="false" class="content-card">
          <div class="book-list">
            <a-card hoverable class="book-card">
              <a-card-meta
                title="《黄帝内经》"
                description="中医理论奠基之作，分《素问》和《灵枢》两部分"
              >
                <template #avatar>
                  <a-icon type="book" :style="{ fontSize: '48px', color: '#1890ff' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="book-card">
              <a-card-meta
                title="《伤寒论》"
                description="张仲景所著，经方学派核心典籍，论述外感热病治法"
              >
                <template #avatar>
                  <a-icon type="book" :style="{ fontSize: '48px', color: '#52c41a' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="book-card">
              <a-card-meta
                title="《金匮要略》"
                description="张仲景所著，论述杂病辨证论治，与《伤寒论》合称《伤寒杂病论》"
              >
                <template #avatar>
                  <a-icon type="book" :style="{ fontSize: '48px', color: '#fa8c16' }" />
                </template>
              </a-card-meta>
            </a-card>
            <a-card hoverable class="book-card">
              <a-card-meta
                title="《温病条辨》"
                description="吴鞠通所著，温病学派代表著作，建立温病三焦辨证体系"
              >
                <template #avatar>
                  <a-icon type="book" :style="{ fontSize: '48px', color: '#722ed1' }" />
                </template>
              </a-card-meta>
            </a-card>
          </div>
        </a-card>

        <a-card title="条文卡片" :bordered="false" class="content-card">
          <div class="card-grid">
            <a-tag color="blue">六经辨证</a-tag>
            <a-tag color="green">病机</a-tag>
            <a-tag color="orange">方证</a-tag>
            <a-tag color="purple">桂枝汤</a-tag>
            <a-tag color="red">小柴胡汤</a-tag>
            <a-tag color="cyan">麻黄汤</a-tag>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Classics'
}
</script>

<style scoped>
.classics-container {
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

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.book-card {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.book-card:hover {
  transform: translateY(-5px);
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>