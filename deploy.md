# 七夕节网页部署指南 🌹

## 部署选项

### 1. GitHub Pages (免费，推荐)
1. 在GitHub上创建一个新的仓库
2. 将项目文件上传到仓库
3. 在仓库设置中启用GitHub Pages
4. 选择main分支作为源
5. 几分钟后即可通过 `https://你的用户名.github.io/仓库名` 访问

### 2. Vercel (免费，推荐)
1. 注册Vercel账号 (https://vercel.com)
2. 连接GitHub仓库
3. 选择项目文件夹
4. 点击部署
5. 获得一个可访问的URL

### 3. Netlify (免费)
1. 注册Netlify账号 (https://netlify.com)
2. 拖拽项目文件夹到Netlify
3. 自动部署并生成URL

### 4. 本地服务器测试
```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx serve .

# 然后访问 http://localhost:8000
```

## 自定义配置

### 修改祝福语
在 `script.js` 文件中找到 `memories` 数组，可以修改回忆内容：
```javascript
memories: [
    {
        id: 1,
        icon: '💑',
        title: '你的标题',
        description: '你的描述'
    }
    // 添加更多回忆...
]
```

### 修改祝福文字
在 `index.html` 文件中找到祝福页面的内容，可以修改文字：
```html
<div class="blessing-text">
    <p>你的祝福语...</p>
</div>
```

### 添加背景音乐
1. 将音乐文件放在 `assets/music/` 文件夹中
2. 在 `script.js` 中添加音乐播放逻辑

## 技术特性
- ✅ 响应式设计，支持手机和电脑
- ✅ 触摸手势支持（滑动切换页面）
- ✅ 键盘导航支持（方向键、空格键、ESC键）
- ✅ 唯美的动画效果
- ✅ 星空背景和花瓣飘落
- ✅ 页面切换动画
- ✅ 消息提示系统

## 浏览器兼容性
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- 移动端浏览器

## 性能优化
- 使用CSS3动画，性能优秀
- 图片使用emoji，加载快速
- 代码压缩，文件体积小
- 响应式图片，适配各种设备

## 安全注意事项
- 静态网页，无后端依赖
- 无用户数据收集
- 可安全部署到任何静态托管服务

## 故障排除
1. 如果动画不流畅，检查浏览器是否支持CSS3
2. 如果触摸手势不工作，确保在移动设备上测试
3. 如果页面显示异常，清除浏览器缓存
4. 如果部署后无法访问，检查文件路径是否正确
