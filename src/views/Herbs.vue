<template>
  <div class="herbs-container">
    <div class="container">
      <h1 class="page-title">中药精研库</h1>
      <div class="content">
        <a-card title="常用中药" :bordered="false" class="content-card">
          <div class="herb-list">
            <a-card
              v-for="herb in herbs"
              :key="herb.id"
              hoverable
              class="herb-card"
            >
              <a-card-meta
                :title="herb.name"
                :description="`${herb.property}，味${herb.channel}；归${herb.channel}经。${herb.function}`"
              >
                <template #avatar>
                  <a-icon type="medicine-box" :style="{ fontSize: '48px', color: '#faad14' }" />
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
import { getAllMedicines } from '../api/medicine'

export default {
  name: 'Herbs',
  data() {
    return {
      herbs: []
    }
  },
  mounted() {
    this.loadHerbs()
  },
  methods: {
    loadHerbs() {
      getAllMedicines().then(res => {
        this.herbs = res
      }).catch(err => {
        console.error('Failed to load herbs:', err)
      })
    }
  }
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