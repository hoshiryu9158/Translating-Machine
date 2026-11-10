const romanceBtn = document.getElementById("romanceBtn");
const cyberBtn = document.getElementById("cyberBtn");

function changeTheme(theme) {
    document.body.className = theme;

    romanceBtn.classList.toggle(
        "active",
        theme === "romance"
    );

    cyberBtn.classList.toggle(
        "active",
        theme === "cyber"
    );
}

romanceBtn.addEventListener("click", () => {
    changeTheme("romance");
});

cyberBtn.addEventListener("click", () => {
    changeTheme("cyber");
});

// 아직 번역 기능은 연결하지 않은 상태
document.getElementById("translateBtn").addEventListener("click", () => {
    alert("번역 엔진은 아직 개발 중입니다!");
});