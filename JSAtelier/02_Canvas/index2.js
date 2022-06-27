const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let xPos = 0;

function play() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPos, 0, 30, 30);
    xPos += 2;
    if(xPos >= 500){
        xPos = 0;
    }
    window.requestAnimationFrame(play);
}

window.requestAnimationFrame(play);