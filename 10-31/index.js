let current = 0
let timer
let $buttons = $('.buttons > button')
let $images = $('.images')
let $imgs = $images.children('img')
let $imgLength = $imgs.length
let $firstCopy = $imgs.eq(0).clone(true)
let $lastCopy = $imgs.eq($imgLength-1).clone(true)

$images.hide().offset()
$images.css({
    transform: 'translateX(-400px)'
}).show()

$images.append($firstCopy)
$images.prepend($lastCopy)

$buttons.on('click', function(){
    let index = $(this).index()
    goToSlide(index)
})
$('#next').on('click', function(){
    goToSlide(current+1)
})
$('#prev').on('click', function(){
    goToSlide(current-1)
})

timer = setInterval(function(){
    goToSlide(current+1)
}, 2000)

$('.container').on('mouseenter', function(){
    clearInterval(timer)
}).on('mouseleave', function(){
    timer = setInterval(function(){
        goToSlide(current+1)
    }, 2000)
})

document.addEventListener('visibilitychange', function(e) {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        timer = setInterval(function(){
            goToSlide(current+1)
        }, 2000)
    }
})

function goToSlide(index){
    if(index > $imgLength - 1){
        index = 0
    }else if(index < 0){
        index = $imgLength - 1
    }
    if(current === $imgLength - 1 && index === 0){
        $images.css({transform: `translateX(${-($imgLength+1)*400}px)`})
            .one('transitionend', function(){
                $images.hide().offset()
                $images.css({transform: `translateX(${-(index+1)*400}px)`})
                    .show()
            })
    }else if(current === 0 && index === $imgLength - 1){
        $images.css({transform: `translateX(${-(current)*400}px)`})
            .one('transitionend', function(){
                $images.hide().offset()
                $images.css({transform: `translateX(${-(index+1)*400}px)`})
                    .show()
            })
    }else{
        $images.css({transform: `translateX(${-(index+1)*400}px)`})
    }
    current = index
}