const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



class Ball{
    constructor() {
        this.xPos = 200;
        this.yPos = 200;
        this.xSpeed = 5;
        this.ySpeed = 3;
    }
    drawBall(){
        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";
        ctx.lineWidth = 30;
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, 20, 0, Math.PI*2, false);
        ctx.fill();
        ctx.stroke();
    }
    moveBall(){
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
    }
    collisionBall(){
        if(this.xPos > 460 || this.xPos < 40){
            this.xSpeed = -this.xSpeed;
        }
        if(this.yPos > 460 || this.yPos < 40){
            this.ySpeed = -this.ySpeed;
        }
    }
}

const ball = new Ball();

function play() {
    ctx.clearRect(0, 0, 500, 500);
    ball.drawBall();
    ball.moveBall();
    ball.collisionBall();
    window.requestAnimationFrame(play);
}

window.requestAnimationFrame(play);