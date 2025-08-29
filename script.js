// 创建Vue3应用实例
const { createApp } = Vue;

// 创建Vue应用
createApp({
    data() {
        return {
            // 当前页面状态
            currentPage: 'welcome',
            currentPageIndex: 0,
            
            // 页面配置
            pages: ['welcome', 'blessing', 'memory', 'gift'],
            
            // 音乐播放状态
            isMusicPlaying: false,
            
            // 礼物是否已打开
            giftOpened: false,
            
            // 星空效果数据
            stars: [],
            
            // 花瓣效果数据
            petals: [],
            
            // 回忆数据
            memories: [
                {
                    id: 1,
                    icon: '💑',
                    title: '初次相遇',
                    description: '那个阳光明媚的下午，你的笑容如春风般温暖'
                },
                {
                    id: 2,
                    icon: '💕',
                    title: '甜蜜恋爱',
                    description: '一起走过的每一个地方，都留下了我们的足迹'
                },
                {
                    id: 3,
                    icon: '💒',
                    title: '幸福婚礼',
                    description: '在亲朋好友的祝福中，我们许下了一生的承诺'
                },
                {
                    id: 4,
                    icon: '🏠',
                    title: '温馨家庭',
                    description: '每天醒来看到你，就是最大的幸福'
                },
                {
                    id: 5,
                    icon: '🌅',
                    title: '美好未来',
                    description: '愿我们的爱情如朝阳般温暖，如夕阳般美丽'
                },
                {
                    id: 6,
                    icon: '💝',
                    title: '永恒之爱',
                    description: '无论岁月如何变迁，我对你的爱永远不变'
                }
            ]
        };
    },
    
    mounted() {
        // 页面加载完成后初始化
        this.initStars();
        this.initPetals();
        this.startPetalsAnimation();
        this.addKeyboardNavigation();
    },
    
    methods: {
        // 初始化星空效果
        initStars() {
            const starCount = 50; // 星星数量
            for (let i = 0; i < starCount; i++) {
                this.stars.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    delay: Math.random() * 3
                });
            }
        },
        
        // 初始化花瓣效果
        initPetals() {
            const petalCount = 20; // 花瓣数量
            for (let i = 0; i < petalCount; i++) {
                this.petals.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    delay: Math.random() * 10
                });
            }
        },
        
        // 开始花瓣飘落动画
        startPetalsAnimation() {
            setInterval(() => {
                // 随机添加新的花瓣
                if (this.petals.length < 30) {
                    this.petals.push({
                        id: Date.now(),
                        x: Math.random() * window.innerWidth,
                        delay: 0
                    });
                }
                
                // 移除超出屏幕的花瓣
                this.petals = this.petals.filter(petal => {
                    const element = document.querySelector(`[data-petal-id="${petal.id}"]`);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        return rect.top < window.innerHeight + 100;
                    }
                    return true;
                });
            }, 2000);
        },
        
        // 显示爱心效果
        showLove() {
            // 创建爱心爆炸效果
            const heart = document.querySelector('.heart');
            if (heart) {
                heart.style.transform = 'scale(1.5)';
                heart.style.filter = 'drop-shadow(0 0 30px #ff6b9d)';
                
                setTimeout(() => {
                    heart.style.transform = 'scale(1)';
                    heart.style.filter = 'drop-shadow(0 0 20px #ff6b9d)';
                }, 300);
            }
            
            // 显示爱心消息
            this.showMessage('我爱你！💖', 'success');
        },
        
        // 下一页
        nextPage() {
            const currentIndex = this.pages.indexOf(this.currentPage);
            if (currentIndex < this.pages.length - 1) {
                this.currentPageIndex = currentIndex + 1;
                this.currentPage = this.pages[this.currentPageIndex];
                this.playPageTransition();
            }
        },
        
        // 上一页
        prevPage() {
            const currentIndex = this.pages.indexOf(this.currentPage);
            if (currentIndex > 0) {
                this.currentPageIndex = currentIndex - 1;
                this.currentPage = this.pages[this.currentPageIndex];
                this.playPageTransition();
            }
        },
        
        // 跳转到指定页面
        goToPage(index) {
            if (index >= 0 && index < this.pages.length) {
                this.currentPageIndex = index;
                this.currentPage = this.pages[index];
                this.playPageTransition();
            }
        },
        
        // 页面切换动画
        playPageTransition() {
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.style.opacity = '0';
                mainContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    mainContent.style.opacity = '1';
                    mainContent.style.transform = 'translateY(0)';
                }, 300);
            }
        },
        
        // 显示回忆详情
        showMemory(memory) {
            this.showMessage(`${memory.title}: ${memory.description}`, 'info');
            
            // 添加点击动画效果
            const card = event.target.closest('.memory-card');
            if (card) {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 150);
            }
        },
        
        // 打开礼物
        openGift() {
            if (!this.giftOpened) {
                this.giftOpened = true;
                this.showMessage('礼物已打开！💝', 'success');
                
                // 播放礼物打开动画
                const giftBox = document.querySelector('.gift-box');
                if (giftBox) {
                    giftBox.style.transform = 'scale(1.1) rotate(5deg)';
                    setTimeout(() => {
                        giftBox.style.transform = 'scale(1) rotate(0deg)';
                    }, 500);
                }
            }
        },
        
        // 重新开始
        restart() {
            this.currentPage = 'welcome';
            this.currentPageIndex = 0;
            this.giftOpened = false;
            this.showMessage('重新开始浪漫之旅！🌹', 'info');
        },
        
        // 切换音乐播放状态
        toggleMusic() {
            this.isMusicPlaying = !this.isMusicPlaying;
            if (this.isMusicPlaying) {
                this.showMessage('音乐已开启 🎵', 'success');
                // 这里可以添加实际的音乐播放逻辑
            } else {
                this.showMessage('音乐已关闭 🔇', 'info');
                // 这里可以添加实际的音乐停止逻辑
            }
        },
        
        // 显示消息提示
        showMessage(message, type = 'info') {
            // 创建消息元素
            const messageEl = document.createElement('div');
            messageEl.className = `message message-${type}`;
            messageEl.textContent = message;
            messageEl.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
                color: white;
                padding: 12px 24px;
                border-radius: 25px;
                z-index: 1000;
                animation: slideInDown 0.3s ease-out;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            `;
            
            document.body.appendChild(messageEl);
            
            // 3秒后自动移除
            setTimeout(() => {
                messageEl.style.animation = 'slideOutUp 0.3s ease-out';
                setTimeout(() => {
                    if (messageEl.parentNode) {
                        messageEl.parentNode.removeChild(messageEl);
                    }
                }, 300);
            }, 3000);
        },
        
        // 添加键盘导航
        addKeyboardNavigation() {
            document.addEventListener('keydown', (event) => {
                switch(event.key) {
                    case 'ArrowRight':
                    case ' ':
                        event.preventDefault();
                        this.nextPage();
                        break;
                    case 'ArrowLeft':
                        event.preventDefault();
                        this.prevPage();
                        break;
                    case 'Escape':
                        event.preventDefault();
                        this.restart();
                        break;
                }
            });
        },
        
        // 窗口大小改变时重新调整
        handleResize() {
            // 重新计算星星位置
            this.stars.forEach(star => {
                star.x = Math.random() * window.innerWidth;
                star.y = Math.random() * window.innerHeight;
            });
            
            // 重新计算花瓣位置
            this.petals.forEach(petal => {
                petal.x = Math.random() * window.innerWidth;
            });
        }
    },
    
    // 生命周期钩子
    beforeUnmount() {
        // 清理事件监听器
        window.removeEventListener('resize', this.handleResize);
    }
}).mount('#app');

// 添加全局CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideOutUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
    
    .main-content {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// 添加窗口大小改变监听
window.addEventListener('resize', () => {
    // 触发Vue实例的resize方法
    const app = document.querySelector('#app').__vue_app__;
    if (app && app._instance && app._instance.proxy) {
        app._instance.proxy.handleResize();
    }
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', () => {
    // 添加加载动画
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="font-size: 2rem; margin-bottom: 20px;">🌹</div>
            <div style="font-size: 1.2rem;">正在加载浪漫...</div>
        </div>
    `;
    document.body.appendChild(loader);
    
    // 2秒后移除加载动画
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }, 2000);
});

    // 移动端优化和触摸支持
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isScrolling = false;
    
    // 防止双击缩放和滚动冲突
    document.addEventListener('touchstart', (event) => {
        // 防止双击缩放
        if (event.touches.length > 1) {
            event.preventDefault();
        }
        
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchStartTime = Date.now();
        isScrolling = false;
    }, { passive: false });
    
    // 触摸移动检测
    document.addEventListener('touchmove', (event) => {
        if (event.touches.length === 1) {
            const touchX = event.touches[0].clientX;
            const touchY = event.touches[0].clientY;
            const deltaX = Math.abs(touchX - touchStartX);
            const deltaY = Math.abs(touchY - touchStartY);
            
            // 如果垂直滚动距离大于水平距离，标记为滚动状态
            if (deltaY > deltaX && deltaY > 10) {
                isScrolling = true;
            }
        }
    }, { passive: true });
    
    // 触摸结束处理
    document.addEventListener('touchend', (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;
        const touchEndTime = Date.now();
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        const deltaTime = touchEndTime - touchStartTime;
        
        // 只有在非滚动状态且触摸时间小于500ms时才处理手势
        if (!isScrolling && deltaTime < 500) {
            // 判断滑动方向（水平距离大于垂直距离且大于50px）
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                event.preventDefault();
                
                if (deltaX > 0) {
                    // 向右滑动，上一页
                    const app = document.querySelector('#app').__vue_app__;
                    if (app && app._instance && app._instance.proxy) {
                        app._instance.proxy.prevPage();
                    }
                } else {
                    // 向左滑动，下一页
                    const app = document.querySelector('#app').__vue_app__;
                    if (app && app._instance && app._instance.proxy) {
                        app._instance.proxy.nextPage();
                    }
                }
            }
        }
    }, { passive: false });
    
    // 防止页面滚动（在移动端）
    document.addEventListener('touchmove', (event) => {
        // 如果触摸的是可交互元素，允许滚动
        const target = event.target;
        if (target.closest('.memory-card') || target.closest('.gift-box') || 
            target.closest('.start-btn') || target.closest('.nav-btn') ||
            target.closest('.heart') || target.closest('.music-btn') ||
            target.closest('.indicator-dot')) {
            return;
        }
        
        // 否则阻止默认滚动行为
        event.preventDefault();
    }, { passive: false });
    
    // 移动端性能优化
    if ('serviceWorker' in navigator) {
        // 注册Service Worker用于缓存
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service Worker注册失败，不影响主要功能
        });
    }
    
    // 检测设备类型
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    // iOS设备特殊处理
    if (isIOS) {
        // 防止iOS Safari的弹性滚动
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
        
        // 添加iOS状态栏适配
        const meta = document.querySelector('meta[name="viewport"]');
        if (meta) {
            meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
        }
    }
    
    // 移动端触摸反馈优化
    function addTouchFeedback(element) {
        if (!isMobile) return;
        
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.95)';
            element.style.transition = 'transform 0.1s ease';
        });
        
        element.addEventListener('touchend', () => {
            element.style.transform = 'scale(1)';
        });
        
        element.addEventListener('touchcancel', () => {
            element.style.transform = 'scale(1)';
        });
    }
    
    // 为所有可点击元素添加触摸反馈
    document.addEventListener('DOMContentLoaded', () => {
        const clickableElements = document.querySelectorAll('.start-btn, .nav-btn, .heart, .memory-card, .gift-box, .music-btn, .indicator-dot');
        clickableElements.forEach(addTouchFeedback);
    });
