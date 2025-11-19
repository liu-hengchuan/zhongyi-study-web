<template>
  <div class="classics-container">
    <div class="container">
      <h1 class="page-title">经典典籍库</h1>
      <div class="content">
        <a-card title="经典原文库" :bordered="false" class="content-card">
          <div class="book-list">
            <a-card
              v-for="book in books"
              :key="book.id"
              hoverable
              class="book-card"
            >
              <a-card-meta
                :title="book.name"
                :description="book.intro"
              >
                <template #avatar>
                  <a-icon type="book" :style="{ fontSize: '48px', color: '#1890ff' }" />
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
import { getAllClassicBooks } from '../api/classics'

export default {
  name: 'Classics',
  data() {
    return {
      books: []
    }
  },
  mounted() {
    this.loadBooks()
  },
  methods: {
    loadBooks() {
      getAllClassicBooks().then(res => {
        this.books = res
      }).catch(err => {
        console.error('Failed to load books:', err)
      })
    }
  }
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