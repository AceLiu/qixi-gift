#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
七夕节网页本地服务器启动脚本
用于在本地测试七夕节礼物网页
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

def start_server(port=8000):
    """启动本地HTTP服务器"""
    
    # 获取当前脚本所在目录
    current_dir = Path(__file__).parent.absolute()
    
    # 切换到项目目录
    os.chdir(current_dir)
    
    # 检查必要文件是否存在
    required_files = ['index.html', 'style.css', 'script.js']
    missing_files = [f for f in required_files if not Path(f).exists()]
    
    if missing_files:
        print(f"❌ 缺少必要文件: {', '.join(missing_files)}")
        print("请确保在项目根目录下运行此脚本")
        return False
    
    # 创建HTTP服务器
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", port), Handler) as httpd:
            print(f"🌹 七夕节网页服务器已启动!")
            print(f"📱 本地访问地址: http://localhost:{port}")
            print(f"🌐 局域网访问地址: http://你的IP地址:{port}")
            print(f"📁 服务目录: {current_dir}")
            print("\n💡 使用说明:")
            print("   - 按 Ctrl+C 停止服务器")
            print("   - 在浏览器中打开上述地址即可查看网页")
            print("   - 支持手机和电脑访问")
            
            # 自动打开浏览器
            try:
                webbrowser.open(f'http://localhost:{port}')
                print(f"🚀 已自动打开浏览器")
            except:
                print(f"⚠️  无法自动打开浏览器，请手动访问 http://localhost:{port}")
            
            print("\n" + "="*50)
            print("🎵 七夕节快乐！愿你们的爱情如牛郎织女般永恒！")
            print("="*50)
            
            # 启动服务器
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n👋 服务器已停止")
        print("💝 感谢使用七夕节礼物网页！")
        return True
        
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ 端口 {port} 已被占用")
            print(f"💡 请尝试使用其他端口: python start-server.py {port + 1}")
        else:
            print(f"❌ 启动服务器失败: {e}")
        return False

def get_local_ip():
    """获取本机IP地址"""
    import socket
    try:
        # 连接一个外部地址来获取本机IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

if __name__ == "__main__":
    # 获取端口号（默认为8000）
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ 端口号必须是数字")
            sys.exit(1)
    
    # 显示项目信息
    print("🌹 七夕节礼物网页 - 本地服务器")
    print("="*40)
    print(f"📂 项目目录: {Path(__file__).parent.absolute()}")
    print(f"🌐 本机IP: {get_local_ip()}")
    print(f"🔧 端口: {port}")
    print("="*40)
    
    # 启动服务器
    start_server(port)
