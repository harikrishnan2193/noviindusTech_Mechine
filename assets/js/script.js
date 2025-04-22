// Hero Section
$(document).ready(function () {
    let slideIndex = 0;
    const $slides = $('.carousel-item');
    const totalSlides = $slides.length;

    function showSlide(index) {
        $slides.hide().removeClass('active');
        $slides.eq(index).fadeIn(1000).addClass('active');

        $('.dot').removeClass('active-dot');
        $('.dot[data-slide="' + index + '"]').addClass('active-dot');

        slideIndex = index;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    // initialize
    showSlide(slideIndex);
    const autoSlide = setInterval(nextSlide, 3000);

    // dot click
    $('.dot').on('click', function () {
        const index = $(this).data('slide');
        clearInterval(autoSlide);
        showSlide(index);
    });
});



