var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var using = false;
var eraserEnabled = false;
var lineWidth = 5;

setCanvasSize(canvas);
listenToUser(canvas);
// eraser.onclick = function() {
//     eraserEnabled = true;
//     actions.className = 'actions brushActive'
// }
// brush.onclick = function() {
//     eraserEnabled = false;
//     actions.className = 'actions'
// }
eraser.onclick = function() {
    eraserEnabled = true;
    eraser.classList.add('active');
    pen.classList.remove('active');
}
pen.onclick = function() {
    eraserEnabled = false;
    pen.classList.add('active');
    eraser.classList.remove('active');
}
clear.onclick = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
save.onclick = function(){
    var url = canvas.toDataURL('image/png');
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href= url;
    a.download = '我的canvas画图';
    a.target = '_blank';
    a.click();
}

black.onclick = function(){
    ctx.fillStyle = 'black'
    ctx.strokeStyle = 'black';
    black.classList.add('active');
    red.classList.remove('active');
    green.classList.remove('active');
    blue.classList.remove('active');
}
red.onclick = function(){
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'red';
    red.classList.add('active');
    green.classList.remove('active');
    blue.classList.remove('active');
    black.classList.remove('active');
}
green.onclick = function(){
    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'green';
    green.classList.add('active');
    red.classList.remove('active');
    blue.classList.remove('active');
    black.classList.remove('active');
}
blue.onclick = function(){
    ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'blue';
    blue.classList.add('active');
    green.classList.remove('active');
    red.classList.remove('active');
    black.classList.remove('active');
}
thin.onclick = function(){
    lineWidth = 5
}
thick.onclick = function(){
    lineWidth = 10
}

function drawCircle(x, y, radius) {
    ctx.beginPath();
    // ctx.fillStyle = 'black'
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    // ctx.strokeStyle = 'black';
    ctx.moveTo(x1, y1);
    ctx.lineWidth = lineWidth;
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function setCanvasSize(canvas) {
    getWidthHeight(canvas)
    window.onresize = function() {
        getWidthHeight(canvas)
    }
}

function getWidthHeight(canvas) {
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, pageWidth, pageHeight);
}

function listenToUser(canvas) {
    var lastPoint = {
        'x': undefined,
        'y': undefined
    };

    //特性检测
    if (document.body.ontouchstart !== undefined) {
        //touch
        canvas.ontouchstart = function(e) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;
            using = true;
            if (eraserEnabled) {
                ctx.clearRect(x - 5, y - 5, 10, 10);
            } else {
                lastPoint = {
                    'x': x,
                    'y': y
                };
            }
        }

        canvas.ontouchmove = function(e) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;
            if (!using) return;
            if (eraserEnabled) {
                ctx.clearRect(x - 5, y - 5, 10, 10);

            } else {
                var newPoint = {
                    'x': x,
                    'y': y
                }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
                lastPoint = newPoint;
            }
        }
        canvas.ontouchend = function(e) {
            using = false;
        }
    } else {
        canvas.onmousedown = function(e) {
            var x = e.clientX;
            var y = e.clientY;
            using = true;
            if (eraserEnabled) {
                ctx.clearRect(x - 5, y - 5, 10, 10);
            } else {
                lastPoint = {
                    'x': x,
                    'y': y
                };
            }
        }

        canvas.onmousemove = function(e) {
            var x = e.clientX;
            var y = e.clientY;
            if (!using) return;
            if (eraserEnabled) {
                ctx.clearRect(x - 5, y - 5, 10, 10);

            } else {
                var newPoint = {
                    'x': x,
                    'y': y
                }
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
                lastPoint = newPoint;
            }
        }

        canvas.onmouseup = function(e) {
            using = false;
        }
    }



}