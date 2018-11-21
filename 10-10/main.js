var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// portfolioAll.onclick = function() {
//     portfolioBar.className = 'bar state-1'
// }
// portfolioFramework.onclick = function() {
//     portfolioBar.className = 'bar state-2'
// }
// portfolioVallina.onclick = function() {
//     portfolioBar.className = 'bar state-3'
// }
siteWelcome.classList.remove('active');

let liTags = document.querySelectorAll('nav>ul>li');
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function(e) {
        let li = e.currentTarget;
        li.classList.add('active')
    }
    liTags[i].onmouseleave = function(e) {
        let li = e.currentTarget;
        li.classList.remove('active')
    }
}

let specialTags = document.querySelectorAll('[data-x]');
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
}

sticky()
scrollToTarget()
window.onscroll = function(e) {
    sticky()
    scrollToTarget()
}

function sticky() {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
}

function scrollToTarget() {
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }
    specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#' + id + '"]');
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].classList.remove('highlight');
    }
    a.parentNode.classList.add('highlight')
}



let aAllTags = document.querySelectorAll('nav>ul>li>a');
for (let i = 0; i < aAllTags.length; i++) {
    aAllTags[i].onclick = function(e) {
        e.preventDefault(); // 阻止默认动作
    }
}

let aTags = document.querySelectorAll('.clickMenu>a');
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function(e) {
        let top = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop;
        let currentTop = window.scrollY;
        let targetTop = top - 60
        let s = targetTop - currentTop;
        let t = Math.abs((s / 100) * 300)
        if (t > 500) {
            t = 500
        }
        let coords = {
            y: currentTop
        }
        let tween = new TWEEN.Tween(coords)
            .to({
                y: targetTop
            }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function() {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}
// 设置循环动画
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);