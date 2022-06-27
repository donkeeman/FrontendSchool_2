const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(185, 185, 30, 30);

// ctx.fillStyle = "black";
// ctx.fillRect(300, 300, 30, 30);

// ctx.strokeStyle = "blue";
// ctx.lineWidth = 30;
// ctx.beginPath();
// ctx.moveTo(10, 150);
// ctx.lineTo(150, 300);
// ctx.stroke();

// ctx.lineWidth = 20;
// ctx.beginPath();
// ctx.arc(200, 200, 30, 0, Math.PI*2, false);
// ctx.stroke();

// L
ctx.lineWidth = 30;
ctx.beginPath();
ctx.moveTo(20, 0);
ctx.lineTo(20, 100);
ctx.stroke();
ctx.lineTo(100, 100);
ctx.stroke();

// I
ctx.beginPath();
ctx.moveTo(130, 0);
ctx.lineTo(130, 115);
ctx.stroke();

// O
ctx.beginPath();
ctx.arc(220, 60, 45, 0, Math.PI*2, false);
ctx.stroke();

// N
ctx.beginPath();
ctx.moveTo(310, 0);
ctx.lineTo(310, 115);
ctx.stroke();
ctx.moveTo(310, 0);
ctx.lineTo(380, 107.5);
ctx.stroke();
ctx.moveTo(380, 0);
ctx.lineTo(380, 115);
ctx.stroke();
