$(function(){
    $('#banner-owl-carousel').owlCarousel({
        items: 1,
        // dots: false,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        responsive: window,
    });
    $('#products-owl-carousel').owlCarousel({
        items: 4,
        margin: 30,
        responsiveClass:true,
        responsive: {
            0: {
                items: 2,
                margin: 16
            },
            350: {
                items: 2,
                margin: 16
            },
            600: {
                items: 2,
                margin: 16
            },
            1000: {
                items: 4

            },
        },
    });
    $('#products-owl-carousel-one').owlCarousel({
        items: 4,
        margin: 30,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        responsive: {
            300: {
                items: 2,
                margin: 16,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,

            },
        },
    });
    $('#products-owl-carousel-two').owlCarousel({
        items: 4,
        margin: 30,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        responsive: {
            300: {
                items: 2,
                margin: 16,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,

            },
        },
    });
    $('#assess-owl-carousel').owlCarousel({
        items: 1,
        margin: 24.5,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        responsive: {
            300: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 3,

            },
        },
    });
    $('#picture-owl').owlCarousel({
        stagePadding: 50,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
  });