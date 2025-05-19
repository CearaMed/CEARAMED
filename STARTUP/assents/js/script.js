// JS DA ÁREA DE AVALIAÇÃO DE CLIENTES
let swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        // quando a largura da janela é >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        // quando a largura da janela é >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // quando a largura da janela é >= 1188px
        2024: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});
// FIM JS DA ÁREA DE AVALIAÇÃO DE CLIENTES

// CARD SLIDER ABOUTS
// let swiper2 = new Swiper(".mySwiper", {
//     loop: true,
//     autoplay:true,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: true,
//     grabCursor: true,
//     effect: "coverflow",
//     // centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//         rotate: 0,
//         streatch: 0,
//         depth: 300,
//         modifier: 1,
//         slideShadows: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         // quando a largura da janela é >= 640px
//         640: {
//             slidesPerView: 1,
//             spaceBetween: 18
//         },
//         // quando a largura da janela é >= 768px
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 18
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 20
//         },
//         // quando a largura da janela é >= 1188px
//         2024: {
//             slidesPerView: 3,
//             spaceBetween: 24
//         }
//     }
// });

// JS DA PARTE DO HEADER
ScrollReveal().reveal('.header', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
// FIM DO JS DA PARTE DO HEADER

// JS DA TELA PRINCIPAL
ScrollReveal().reveal('.topo-do-site', {
    origin: 'left',
    duration: 2000,
    distance: '15%'
});
// FIM DO JS DA TELA PRINCIPAL

// JS DAS NOSSAS ESPECIALIDADES
ScrollReveal().reveal('.interface-2', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
// FIM DO JS DAS NOSSAS ESPECIALIDADES

// JS DAS NOSSAS AVALIAÇÕES
ScrollReveal().reveal('#testimonials', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
// FIM DO JS DAS NOSSAS ESPECIALIDADES

// JS DOS NOSSOS DEV'S
ScrollReveal().reveal('.wrapper', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
// FIM DO JS DOS NOSSOS DEV'S