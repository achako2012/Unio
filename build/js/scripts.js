// Custom script
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 17,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});

function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('.body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active');
            burger.classList.add('active-burger');
            body.classList.add('locked');
        } else {
            menu.classList.remove('active');
            burger.classList.remove('active-burger');
            body.classList.remove('locked');
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger');
            body.classList.remove('locked');
        }
    })
}

burgerMenu()

// Call this function if we don't need to scroll in burger view
function fixedNav() {

    const nav = document.querySelector('nav')

    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}

window.addEventListener('scroll', fixedNav)



