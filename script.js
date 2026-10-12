
const pig = document.getElementById("pig");
const hint = document.getElementById("hint");

let jumping = false;

function jump() {
    if (jumping) return;

    jumping = true;
    pig.style.transition = "bottom 0.3s ease-out";
    pig.style.bottom = "170px";

    hint.textContent = "小猪起飞啦！🐷";

    setTimeout(() => {
        pig.style.transition = "bottom 0.4s ease-in";
        pig.style.bottom = "65px";
    }, 300);

    setTimeout(() => {
        jumping = false;
        hint.textContent = "继续点击，让小猪跳起来！";
    }, 700);
}

document.getElementById("game").addEventListener("click", jump);
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();
        jump();
    }
});
