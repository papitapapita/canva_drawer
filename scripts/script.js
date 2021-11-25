const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const linesForm = document.getElementById("linesForm");
const submitButton = document.getElementById("submitButton");
const colorForm = document.getElementById("colorForm");
const keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
let add1, add2, lines, color, x, y;
x = canvas.width/2;
y = canvas.height/2;

document.addEventListener("keydown", customDraw);

submitButton.addEventListener('click', pyramide);

function customDraw(keycode)
{
    switch (keycode.keyCode) {
        case 37:
            draw(color,x,y,x-10,y);
            x -= 10;
            break;
        case 38:
            draw(color,x,y,x,y-10);
            y -= 10;
            break;
        case 39:
            draw(color,x,y,x+10,y);
            x += 10;
            break;
        case 40:
            draw(color,x,y,x,y+10);
            y += 10;
            break;
        default:
            break;
    }
}

function pyramide()
{
    context.clearRect(0,0,canvas.width,canvas.height);

    add1 = 0;
    add2 = canvas.width;

    lines = parseInt(linesForm.value);
    color = colorForm.value;

    while((add1 <= canvas.width) && (add2 >= 0))
    {
        draw(color, add1, 0, canvas.width, add1);
        draw(color, 0, add1, add1, canvas.width);
        draw(color, canvas.width, add1, add2, canvas.height);
        draw(color, 0, add2, add1, 0);
        add1 += (canvas.width/lines);
        add2 -= (canvas.width/lines);
    }
}

function draw(color, x1, y1, x2, y2)
{
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}