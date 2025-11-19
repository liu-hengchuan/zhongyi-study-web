# Vue 2 + Ant Design Vue 项目框架

一个基于 Vue 2 和 Ant Design Vue 构建的现代化项目基础框架，便于后续功能拓展。

## 技术栈

- **Vue 2.7.14** - 渐进式 JavaScript 框架
- **Ant Design Vue 1.7.8** - 企业级 UI 组件库
- **Vue Router 3.6.5** - 路由管理
- **Vuex 3.6.2** - 状态管理
- **Webpack 5** - 模块打包工具

## 项目结构

```
.
├── src/
│   ├── components/          # Vue 组件
│   ├── views/              # 页面组件
│   │   ├── Home.vue       # 欢迎页面
│   │   └── About.vue      # 关于页面
│   ├── router/
│   │   └── index.js       # 路由配置
│   ├── store/
│   │   └── index.js       # 状态管理
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── index.html             # HTML 模板
├── webpack.config.js      # Webpack 配置
├── babel.config.js        # Babel 配置
└── package.json           # 依赖配置
```

## 安装依赖

```bash
npm install
```

## 运行项目

```bash
npm run serve
```

访问 `http://localhost:8080` 查看应用。

## 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

## 项目特点

- ✨ **现代化 UI** - 基于 Ant Design Vue 的美观界面
- 📦 **完整配置** - Vue Router、Vuex 已配置完成
- 🔧 **易于拓展** - 模块化设计，支持功能扩展
- 🚀 **快速启动** - 完整的开发环境配置
- 📱 **响应式设计** - 支持移动端访问

## 页面介绍

### 欢迎页面
- 渐变背景设计
- 动画效果
- 功能特性展示
- 操作按钮

### 关于页面
- 项目信息展示
- 技术栈说明
- 返回首页功能

## 自定义配置

### 修改主题色

在 `src/main.js` 中配置 Ant Design Vue 主题：

```javascript
import { ConfigProvider } from 'ant-design-vue'

Vue.use(Antd)

new Vue({
  render: h => h(ConfigProvider, {
    props: {
      theme: {
        primaryColor: '#667eea'
      }
    }
  }, [h(App)])
}).$mount('#app')
```

### 添加新页面

1. 在 `src/views/` 创建新页面组件
2. 在 `src/router/index.js` 中配置路由
3. 在需要的地方添加导航链接

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## License

MIT
