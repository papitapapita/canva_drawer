const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let add1, add2;
add1 = 0;
add2 = canvas.width;

console.log(canvas.width);

function draw(color, x1, y1, x2, y2)
{
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}

while((add1 <= canvas.width) && (add2 >= 0))
{
    draw("red", add1, 0, canvas.width, add1);
    draw("red", 0, add1, add1, canvas.width);
    draw("red", canvas.width, add1, add2, canvas.height);
    draw("red", 0, add2, add1, 0);
    add1 += 10;
    add2 -= 10;
}