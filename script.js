// script.js
const musicBtn = document.getElementById("music-btn");
const bgm = document.getElementById("bgm");

// 音乐控制
musicBtn.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play().catch(e => {
            console.log("自动播放被阻止，需要用户交互");
            musicBtn.textContent = "♪ 点击播放";
        });
        musicBtn.textContent = "❚❚ 暂停音乐";
    } else {
        bgm.pause();
        musicBtn.textContent = "♪ 播放音乐";
    }
});

// 滚动触发动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target); // 动画播放一次后停止观察
        }
    });
}, observerOptions);

// 页面加载完成后开始观察
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.slide-up').forEach(el => {
        observer.observe(el);
    });
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});