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
