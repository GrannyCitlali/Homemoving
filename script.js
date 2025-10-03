// script.js
const musicBtn = document.getElementById("music-btn");
const bgm = document.getElementById("bgm");

musicBtn.addEventListener("click", () => {
    if (bgm.paused) {
        bgm.play();
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
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.slide-up').forEach(el => {
    observer.observe(el);
});