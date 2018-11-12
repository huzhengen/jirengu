let n, timer
init()

loop()

document.addEventListener('visibilitychange', function(e) {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        loop()
    }
})



function loop() {
    timer = setInterval(() => {
        makeLeave(getImage(n))
            .one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
        makeCurrent(getImage(n + 1))
        n++
    }, 3000)
}

function lengthControl(n) {
    let len = $('.images>img').length;
    if (n > len) {
        n = n % len
        if (n === 0) {
            n = len
        }
    }
    return n
}

function init() {
    n = 1
    $(`.images>img:nth-child(${n})`)
        .addClass('current')
        .siblings()
        .addClass('enter')
}

function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}

function makeEnter($node) {
    return $node.removeClass('current leave').addClass('enter')
}

function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')
}

function getImage(n) {
    return $(`.images>img:nth-child(${lengthControl(n)})`)
}