# 贡献指南

感谢您考虑为七夕节礼物网页项目做出贡献！

## 如何贡献

### 报告Bug

如果您发现了一个bug，请创建一个issue并包含以下信息：

- 详细的bug描述
- 重现步骤
- 预期行为
- 您的设备和浏览器信息
- 如果可能，请提供截图

### 请求新功能

如果您有一个功能请求，请创建一个issue并描述：

- 您希望看到的功能
- 为什么这个功能有用
- 如果可能，请提供设计建议

### 提交代码

1. Fork这个仓库
2. 创建一个新的分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个Pull Request

## 开发环境设置

1. 克隆仓库：
   ```bash
   git clone https://github.com/your-username/qixi-gift.git
   cd qixi-gift
   ```

2. 启动本地服务器：
   ```bash
   python3 start-server.py
   ```

3. 在浏览器中访问 `http://localhost:8000`

## 代码风格

- 使用有意义的变量和函数名
- 添加中文注释说明代码功能
- 保持代码简洁和可读性
- 遵循现有的代码风格

## 提交信息格式

请使用以下格式的提交信息：

```
🌹 类型: 简短描述

详细描述（如果需要）
```

类型包括：
- 🌹 feat: 新功能
- 🐛 fix: 修复bug
- 📝 docs: 文档更新
- 🎨 style: 代码格式调整
- ♻️ refactor: 代码重构
- ⚡ perf: 性能优化
- ✅ test: 测试相关

## 测试

在提交代码之前，请确保：

- 在本地测试所有功能
- 在不同浏览器中测试
- 在移动设备上测试
- 检查响应式设计

## 问题

如果您有任何问题，请随时创建issue或联系项目维护者。

感谢您的贡献！🌹
