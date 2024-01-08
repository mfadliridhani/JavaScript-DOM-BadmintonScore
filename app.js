const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const p1ButtonMin = document.querySelector('#p1-button-min');
const p2ButtonMin = document.querySelector('#p2-button-min');
const p1ButtonMax = document.querySelector('#p1-button-max');
const p2ButtonMax = document.querySelector('#p2-button-max');
const resetButoon = document.querySelector('#reset');
const selectWinPoint = document.querySelector('#winpoint');

let p1Score = 0;
let p2Score = 0;
let winPont = 21;
let isGameOver = false;

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}

p1ButtonMin.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score -= 1;
        if (p1Score === winPont) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2ButtonMin.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score -= 1;
        if (p2Score === winPont) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

p1ButtonMax.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winPont) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2ButtonMax.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winPont) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetButoon.addEventListener('click', reset);

selectWinPoint.addEventListener('change', function(){
    winPont=parseInt(this.value);
    reset();
});