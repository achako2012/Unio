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
