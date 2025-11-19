<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>经方薪传</h3>
        <p>传承经典，薪火相传</p>
        <p>基于经方的中医学习与实践平台</p>
      </div>
      <div class="footer-section">
        <h4>快速链接</h4>
        <a href="#" @click.prevent="$router.push('/')">首页</a>
        <a href="#" @click.prevent="$router.push('/classics')">经典典籍</a>
        <a href="#" @click.prevent="$router.push('/herbs')">中药精研</a>
        <a href="#" @click.prevent="$router.push('/formulas')">方剂解析</a>
      </div>
      <div class="footer-section">
        <h4>学习模块</h4>
        <a href="#" @click.prevent="$router.push('/diagnosis')">脉诊舌诊</a>
        <a href="#" @click.prevent="$router.push('/acupuncture')">针灸腧穴</a>
        <a href="#" @click.prevent="$router.push('/cases')">医案研习</a>
        <a href="#" @click.prevent="$router.push('/profile')">个人中心</a>
      </div>
      <div class="footer-section">
        <h4>联系我们</h4>
        <p>邮箱：support@zhongyi.com</p>
        <p>电话：400-123-4567</p>
        <p>地址：北京市朝阳区中医街1号</p>
      </div>
    </div>
    <div class="copyright">
      <p>© 2023 经方薪传 版权所有 | 备案号：京ICP备12345678号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-container {
  background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
  color: #fff;
  padding: 40px 0 20px 0;
  margin-top: 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-section h3 {
  font-size: 24px;
  margin-bottom: 15px;
  font-family: 'Microsoft YaHei', sans-serif;
}

.footer-section h4 {
  font-size: 16px;
  margin-bottom: 15px;
  color: #FFD700;
  font-family: 'Microsoft YaHei', sans-serif;
}

.footer-section p {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

.footer-section a {
  display: block;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #FFD700;
}

.copyright {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
}
</style>