const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function draw(color, x1, y1, x2, y2)
{
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}

