// 图片管理系统
function toggleImageManagement() {
    const imageManagement = document.querySelector('.image-management');
    if (imageManagement.style.display === 'none' || imageManagement.style.display === '') {
        imageManagement.style.display = 'block';
    } else {
        imageManagement.style.display = 'none';
    }z
}

function updateImage(elementId, inputId) {
    const element = document.getElementById(elementId);
    const input = document.getElementById(inputId);
    const imageUrl = input.value.trim();
    
    if (imageUrl) {
        const img = element.querySelector('img');
        img.src = imageUrl;
        img.alt = '自定义图片';
        input.value = '';
        alert('图片更新成功！');
    } else {
        alert('请输入有效的图片URL');
    }
}

function updatePetImage(index, inputId) {
    const petCards = document.querySelectorAll('.pet-card');
    if (index < petCards.length) {
        const input = document.getElementById(inputId);
        const imageUrl = input.value.trim();
        
        if (imageUrl) {
            const img = petCards[index].querySelector('img');
            img.src = imageUrl;
            img.alt = '自定义宠物图片';
            input.value = '';
            alert('宠物图片更新成功！');
        } else {
            alert('请输入有效的图片URL');
        }
    }
}

// 下载管理系统
function toggleDownloadManagement() {
    const downloadManagement = document.querySelector('.download-management');
    if (downloadManagement.style.display === 'none' || downloadManagement.style.display === '') {
        downloadManagement.style.display = 'block';
    } else {
        downloadManagement.style.display = 'none';
    }
}

function updateDownloadLink(buttonId, inputId) {
    const input = document.getElementById(inputId);
    const downloadUrl = input.value.trim();
    
    if (downloadUrl) {
        const button = document.getElementById(buttonId);
        // 存储下载链接到按钮的data属性
        button.setAttribute('data-download-url', downloadUrl);
        input.value = '';
        alert('下载链接更新成功！');
    } else {
        alert('请输入有效的下载链接');
    }
}

// 下载按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const downloadUrl = this.getAttribute('data-download-url');
            if (downloadUrl) {
                window.location.href = downloadUrl;
            } else {
                // 默认下载链接，可以根据实际情况修改
                alert('正在准备下载...');
            }
        });
    });

    // 登录和注册按钮点击事件
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    
    loginBtn.addEventListener('click', function() {
        alert('登录功能开发中...');
    });
    
    registerBtn.addEventListener('click', function() {
        alert('注册功能开发中...');
    });

    // 立即体验按钮点击事件
    const playBtn = document.querySelector('.play-btn');
    playBtn.addEventListener('click', function() {
        alert('游戏加载中...');
    });

    // 平滑滚动
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 添加一些交互效果
    const petCards = document.querySelectorAll('.pet-card');
    petCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 为新闻卡片添加交互效果
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 为平台卡片添加交互效果
    const platformCards = document.querySelectorAll('.platform-card');
    platformCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});