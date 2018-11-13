let $menuItem = $('.menuItem')
let width = $('#slides').width();

$menuItem.eq(0).addClass('act')

$menuItem.on('click', function(){
    let index = $(this).index()
    console.log(index)
    $('#slides').css({transform: `translateX(${-((index-1)*width)}px)`})
    $(this).addClass('act').siblings().removeClass('act')
})