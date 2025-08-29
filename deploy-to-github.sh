#!/bin/bash

# 七夕节网页 - GitHub Pages 快速部署脚本
# 使用方法: ./deploy-to-github.sh

echo "🌹 七夕节网页 - GitHub Pages 部署脚本"
echo "=================================="

# 检查是否安装了git
if ! command -v git &> /dev/null; then
    echo "❌ 错误: 未安装 Git"
    echo "请先安装 Git: https://git-scm.com/"
    exit 1
fi

# 检查是否安装了gh CLI (GitHub CLI)
if ! command -v gh &> /dev/null; then
    echo "⚠️  警告: 未安装 GitHub CLI"
    echo "建议安装 GitHub CLI 以获得更好的体验: https://cli.github.com/"
    echo "或者您可以手动创建仓库并上传文件"
fi

# 检查必要文件是否存在
required_files=("index.html" "style.css" "script.js")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ 错误: 缺少必要文件 $file"
        echo "请确保在项目根目录下运行此脚本"
        exit 1
    fi
done

echo "✅ 所有必要文件检查通过"

# 询问用户是否要创建新的GitHub仓库
echo ""
echo "请选择操作:"
echo "1. 创建新的GitHub仓库并部署"
echo "2. 部署到现有仓库"
echo "3. 仅准备文件，手动部署"
read -p "请输入选择 (1-3): " choice

case $choice in
    1)
        echo ""
        echo "📝 创建新的GitHub仓库..."
        
        if command -v gh &> /dev/null; then
            # 使用GitHub CLI创建仓库
            read -p "请输入仓库名称 (例如: qixi-gift): " repo_name
            read -p "请输入仓库描述 (可选): " repo_description
            
            echo "🚀 正在创建GitHub仓库..."
            gh repo create "$repo_name" --public --description "$repo_description" --source=. --remote=origin --push
            
            if [ $? -eq 0 ]; then
                echo "✅ 仓库创建成功!"
                echo "🌐 您的网页将在几分钟后可通过以下地址访问:"
                echo "   https://$(gh api user --jq .login).github.io/$repo_name"
            else
                echo "❌ 仓库创建失败"
                exit 1
            fi
        else
            echo "❌ 未安装GitHub CLI，无法自动创建仓库"
            echo "请手动在GitHub上创建仓库，然后选择选项2"
            exit 1
        fi
        ;;
        
    2)
        echo ""
        echo "📝 部署到现有仓库..."
        
        if [ ! -d ".git" ]; then
            echo "❌ 当前目录不是Git仓库"
            echo "请先初始化Git仓库: git init"
            exit 1
        fi
        
        # 检查是否有远程仓库
        if ! git remote get-url origin &> /dev/null; then
            read -p "请输入GitHub仓库URL: " repo_url
            git remote add origin "$repo_url"
        fi
        
        echo "🚀 正在部署到GitHub..."
        git add .
        git commit -m "🌹 七夕节礼物网页 - 浪漫更新"
        git push origin main
        
        if [ $? -eq 0 ]; then
            echo "✅ 部署成功!"
            echo "🌐 请在GitHub仓库设置中启用GitHub Pages"
        else
            echo "❌ 部署失败"
            exit 1
        fi
        ;;
        
    3)
        echo ""
        echo "📁 准备部署文件..."
        
        # 创建部署文件夹
        deploy_dir="deploy-files"
        mkdir -p "$deploy_dir"
        
        # 复制必要文件
        cp index.html "$deploy_dir/"
        cp style.css "$deploy_dir/"
        cp script.js "$deploy_dir/"
        cp README.md "$deploy_dir/"
        
        echo "✅ 文件已准备完成，保存在 $deploy_dir 文件夹中"
        echo "📋 手动部署步骤:"
        echo "1. 在GitHub上创建新仓库"
        echo "2. 将 $deploy_dir 中的文件上传到仓库"
        echo "3. 在仓库设置中启用GitHub Pages"
        echo "4. 选择main分支作为源"
        ;;
        
    *)
        echo "❌ 无效选择"
        exit 1
        ;;
esac

echo ""
echo "🎉 部署完成！"
echo ""
echo "💡 使用提示:"
echo "   - 如果使用GitHub Pages，网页将在几分钟后可用"
echo "   - 支持手机和电脑访问"
echo "   - 可以自定义祝福语和回忆内容"
echo "   - 如需修改内容，编辑文件后重新部署即可"
echo ""
echo "🌹 七夕节快乐！愿你们的爱情如牛郎织女般永恒！"
