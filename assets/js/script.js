// Hero Section
// $(document).ready(function () {
//     let slideIndex = 0
//     const $slides = $('.carousel-item')
//     const totalSlides = $slides.length

//     function showSlide(index) {
//         $slides.hide().removeClass('active')
//         $slides.eq(index).fadeIn(1000).addClass('active')

//         $('.dot').removeClass('active-dot')
//         $('.dot[data-slide="' + index + '"]').addClass('active-dot')

//         slideIndex = index;
//     }

//     function nextSlide() {
//         slideIndex = (slideIndex + 1) % totalSlides
//         showSlide(slideIndex)
//     }

//     // initialize
//     showSlide(slideIndex);
//     const autoSlide = setInterval(nextSlide, 3000)

//     // dot click
//     $('.dot').on('click', function () {
//         const index = $(this).data('slide')
//         clearInterval(autoSlide)
//         showSlide(index)
//     })
// })
$(document).ready(function () {
    // Carousel
    let slideIndex = 0
    const $slides = $('.carousel-item')
    const totalSlides = $slides.length

    function showSlide(index) {
        $slides.removeClass('active').hide()
        $slides.eq(index).fadeIn(1000).addClass('active')

        $('.dot').removeClass('active-dot')
        $('.dot[data-slide="' + index + '"]').addClass('active-dot')

        slideIndex = index
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides
        showSlide(slideIndex)
    }

    showSlide(slideIndex)
    let autoSlide = setInterval(nextSlide, 3000)

    $('.dot').on('click', function () {
        const index = $(this).data('slide')
        clearInterval(autoSlide)
        showSlide(index)
    })

    // Submenu toggle
    $('.dropdown-submenu > a').on('click', function (e) {
        e.preventDefault()
        const $submenu = $(this).next('.dropdown-menu')
        $submenu.toggleClass('show')

        $(this).closest('.dropdown-menu').find('.dropdown-menu').not($submenu).removeClass('show')
        e.stopPropagation()
    })

    // close submenu on parent dropdown close
    $('.dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('.dropdown-menu.show').removeClass('show')
    })

    // pause carousel while dropdown is open
    $('.dropdown').on('show.bs.dropdown', function () {
        clearInterval(autoSlide)
    })

    $('.dropdown').on('hide.bs.dropdown', function () {
        autoSlide = setInterval(nextSlide, 3000)
    })
})


// swiper 
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})

//model
const modal = document.getElementById("demoModal")
const openBtn = document.getElementById("openModalBtn")
const closeBtn = document.getElementById("closeModalBtn")

openBtn.onclick = () => {
    modal.style.display = "flex";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

