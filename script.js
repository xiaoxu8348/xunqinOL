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
        openModal('loginModal');
    });
    
    registerBtn.addEventListener('click', function() {
        openModal('registerModal');
    });

    // 注册表单提交事件
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleRegister();
    });

    // 登录表单提交事件
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });

    // 点击模态框外部关闭
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };

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

// 打开模态框
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// 关闭模态框
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// 验证输入是否只包含数字或字母
function validateAlphanumeric(input) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(input);
}

// 检查账号是否已存在
function isUsernameExists(username) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some(user => user.username === username);
}

// 处理注册
function handleRegister() {
    const username = document.getElementById('registerUsername').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // 验证账号格式
    if (!validateAlphanumeric(username)) {
        alert('账号只能包含数字或字母！');
        return;
    }

    // 验证密码格式
    if (!validateAlphanumeric(password)) {
        alert('密码只能包含数字或字母！');
        return;
    }

    // 验证密码长度
    if (password.length < 6) {
        alert('密码长度至少为6位！');
        return;
    }

    // 验证确认密码
    if (password !== confirmPassword) {
        alert('两次输入的密码不一致！');
        return;
    }

    // 检查账号是否已存在
    if (isUsernameExists(username)) {
        alert('该账号已注册！');
        return;
    }

    // 保存用户信息
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
        username: username,
        password: password
    });
    localStorage.setItem('users', JSON.stringify(users));

    alert('注册成功！');
    closeModal('registerModal');
    
    // 清空表单
    document.getElementById('registerForm').reset();
}

// 处理登录
function handleLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;

    // 获取所有用户
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // 查找匹配的用户
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('登录成功！');
        closeModal('loginModal');
        
        // 更新UI显示已登录状态
        const loginBtn = document.querySelector('.login-btn');
        const registerBtn = document.querySelector('.register-btn');
        loginBtn.textContent = username;
        registerBtn.textContent = '退出';
        registerBtn.onclick = function() {
            handleLogout();
        };
        
        // 清空表单
        document.getElementById('loginForm').reset();
    } else {
        alert('账号或密码错误！');
    }
}

// 处理退出登录
function handleLogout() {
    if (confirm('确定要退出登录吗？')) {
        const loginBtn = document.querySelector('.login-btn');
        const registerBtn = document.querySelector('.register-btn');
        loginBtn.textContent = '登录';
        registerBtn.textContent = '注册';
        
        // 恢复注册按钮的点击事件
        registerBtn.onclick = null;
        registerBtn.addEventListener('click', function() {
            openModal('registerModal');
        });
    }
}
