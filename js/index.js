$(document).ready(function () {

    
    
    $('.slider-centered').slick({
        centerMode: false,
        slidesToShow: 3,
        infinite: false,
        prevArrow: '<span class="slider-prev"><img src="img/icons/slider-prev.svg"></span>',
        nextArrow: '<span class="slider-next"><img src="img/icons/slider-next.svg"></span>',
        

        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
        
    });

    $('.published-projects').slick({
       
        slidesToShow: 3,
        infinite: false,
        centerMode: false,
  
        prevArrow: '<span class="slider-prev"><img src="img/icons/slider-prev.svg"></span>',
        nextArrow: '<span class="slider-next"><img src="img/icons/slider-next.svg"></span>',

        responsive: [
            {
                breakpoint: 1900,
                settings: {

                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    $('.downloads').slick({
        centerMode: false,
        slidesToShow: 4,
        infinite: false,
        prevArrow: '<span class="slider-prev"><img src="img/icons/slider-prev.svg"></span>',
        nextArrow: '<span class="slider-next"><img src="img/icons/slider-next.svg"></span>',

        responsive: [
            
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.details-slider').slick({
        centerMode: false,
        slidesToShow: 4,
        infinite: false,
        prevArrow: '<span class="slider-prev"><img src="img/icons/slider-prev.svg"></span>',
        nextArrow: '<span class="slider-next"><img src="img/icons/slider-next.svg"></span>',


        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.details-slider').length && $('.details-slider').slickLightbox({
        src: 'src',
        itemSelector: '.details__slider-item img',
    });

    $('.details-slider').length && $('.details-slider').slickLightbox().on({
        'show.slickLightbox': function() {
            $('.slick-lightbox-slick-item-inner').css({
                position: 'relative',
                zIndex: '10000'
            }).append($('.slick-lightbox-close'));
        },

    });
});
