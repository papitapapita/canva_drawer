const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.beginPath();
context.strokeStyle = "red";
context.moveTo(200,200);
context.lineTo(400,400);
context.stroke();
context.closePath();