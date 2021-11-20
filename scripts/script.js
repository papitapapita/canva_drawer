const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const linesForm = document.getElementById("linesForm");
const submitButton = document.getElementById("submitButton");
const colorForm = document.getElementById("colorForm");
let add1, add2, lines, color;

submitButton.addEventListener('click', pyramide);

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