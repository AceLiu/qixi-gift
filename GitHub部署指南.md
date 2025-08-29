# GitHub仓库创建和部署指南 🚀

## 第一步：创建GitHub仓库

### 1. 登录GitHub
访问 [GitHub.com](https://github.com) 并登录您的账户。

### 2. 创建新仓库
1. 点击右上角的 "+" 号，选择 "New repository"
2. 填写仓库信息：
   - **Repository name**: `qixi-gift` (或您喜欢的名称)
   - **Description**: `浪漫的七夕节礼物网页 - 送给最爱的你`
   - **Visibility**: 选择 `Public` (公开)
   - **不要**勾选 "Add a README file" (我们已经有了)
   - **不要**勾选 "Add .gitignore" (我们已经有了)
   - **不要**勾选 "Choose a license" (可选)

3. 点击 "Create repository"

## 第二步：连接本地仓库到GitHub

### 方法1：使用HTTPS (推荐)
```bash
# 添加远程仓库
git remote add origin https://github.com/你的用户名/qixi-gift.git

# 推送代码到GitHub
git branch -M main
git push -u origin main
```

### 方法2：使用SSH (如果您配置了SSH密钥)
```bash
# 添加远程仓库
git remote add origin git@github.com:你的用户名/qixi-gift.git

# 推送代码到GitHub
git branch -M main
git push -u origin main
```

## 第三步：启用GitHub Pages

### 1. 进入仓库设置
1. 在您的GitHub仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages"

### 2. 配置GitHub Pages
1. **Source**: 选择 "Deploy from a branch"
2. **Branch**: 选择 "gh-pages" (如果使用GitHub Actions) 或 "main"
3. **Folder**: 选择 "/ (root)"
4. 点击 "Save"

### 3. 等待部署
- GitHub Pages 需要几分钟时间来部署您的网站
- 部署完成后，您会看到一个绿色的勾号
- 您的网站地址将是：`https://你的用户名.github.io/qixi-gift`

## 第四步：自动部署 (可选)

### 使用GitHub Actions
项目已经包含了自动部署配置，当您推送代码到main分支时，会自动部署到GitHub Pages。

### 手动触发部署
如果您想手动触发部署：
1. 进入仓库的 "Actions" 标签
2. 点击 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow"

## 第五步：自定义域名 (可选)

### 1. 购买域名
如果您有自己的域名，可以将其指向GitHub Pages。

### 2. 配置自定义域名
1. 在仓库的 "Settings" > "Pages" 中
2. 在 "Custom domain" 字段中输入您的域名
3. 点击 "Save"
4. 创建一个 `CNAME` 文件，内容为您的域名

## 第六步：测试部署

### 1. 访问您的网站
- 本地测试：`http://localhost:8000`
- 在线访问：`https://你的用户名.github.io/qixi-gift`

### 2. 功能测试
- [ ] 页面正常加载
- [ ] 动画效果正常
- [ ] 触摸手势工作
- [ ] 响应式设计正常
- [ ] 所有页面都能访问

## 常见问题解决

### 问题1: 推送代码失败
**解决方案:**
```bash
# 检查远程仓库配置
git remote -v

# 如果配置错误，重新设置
git remote remove origin
git remote add origin https://github.com/你的用户名/qixi-gift.git

# 推送代码
git push -u origin main
```

### 问题2: GitHub Pages 不显示
**解决方案:**
1. 检查仓库是否为公开仓库
2. 确认GitHub Pages已启用
3. 等待几分钟让部署完成
4. 检查Actions标签中的部署状态

### 问题3: 自定义域名不工作
**解决方案:**
1. 确认DNS设置正确
2. 等待DNS传播（可能需要24小时）
3. 检查CNAME文件是否正确

## 更新网站

### 日常更新流程
```bash
# 1. 修改代码
# 2. 提交更改
git add .
git commit -m "🌹 更新: 描述您的更改"

# 3. 推送到GitHub
git push origin main

# 4. 等待自动部署完成
```

### 查看部署状态
1. 进入仓库的 "Actions" 标签
2. 查看最新的部署工作流
3. 绿色勾号表示部署成功

## 安全注意事项

### 1. 敏感信息
- 不要在代码中包含敏感信息
- 使用环境变量存储密钥
- 检查.gitignore文件

### 2. 访问控制
- 考虑是否需要私有仓库
- 定期检查仓库设置
- 监控访问日志

## 性能优化

### 1. 图片优化
- 使用WebP格式
- 压缩图片大小
- 使用懒加载

### 2. 代码优化
- 压缩CSS和JavaScript
- 使用CDN加速
- 启用浏览器缓存

## 监控和维护

### 1. 定期检查
- 网站访问状态
- 功能是否正常
- 用户反馈

### 2. 备份
- 定期备份代码
- 保存重要配置
- 记录部署历史

---

🎉 **恭喜！您的七夕节礼物网页现在已经成功部署到GitHub Pages！**

您的妻子可以通过以下地址访问：
`https://你的用户名.github.io/qixi-gift`

🌹 **七夕节快乐！愿你们的爱情如牛郎织女般永恒！** 💕
